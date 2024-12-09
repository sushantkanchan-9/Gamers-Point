import { Box, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";
import { BiSolidError } from "react-icons/bi";
import { useState } from "react";
//import error404 from "../assets/404-Error.png";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true); // Start spinning
    setTimeout(() => setIsSpinning(false), 2000);
  };

  if (error)
    return (
      <Box margin={10}>
        <Text
          display="flex"
          alignItems="center"
          fontSize={"4xl"}
          color={"red.300"}
        >
          :( Oops! {error}{" "}
          <BiSolidError
            style={{
              marginLeft: "8px",
              animation: isSpinning ? "spin 1s linear infinite" : "none",
              color: isSpinning ? "orange" : "",
            }}
            onClick={handleClick}
          />
          {/* <Image /> */}
        </Text>
        <Text display="flex">
          For API-key contact - <i>sushant</i> .k aka riddler..
        </Text>
      </Box>
    );

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
document.head.appendChild(style);

export default GameGrid;
