import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandedText from "../components/ExpandedText";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import ScreenShots from "../components/ScreenShots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading marginBottom={5}>{game.name}</Heading>
          <ExpandedText text={game.description_raw} />
          <GameAttributes game={game}></GameAttributes>
        </GridItem>
        <GridItem>
          <GameTrailers gameId={game.id}></GameTrailers>
          <ScreenShots gameId={game.id}></ScreenShots>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
