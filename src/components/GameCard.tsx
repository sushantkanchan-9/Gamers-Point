import React from "react";
import useGames, { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroopedIMGUrl from "../services/image-url";
import "../app.css";
import Emoji from "./Emoji";
import AutoCarousel from "./AutoCarousel";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Card>
      <Image src={getCroopedIMGUrl(game.background_image)} />
      {/* <AutoCarousel screenshots={game.short_screenshots} /> */}
      <CardBody bgColor={colorMode == "dark" ? "" : "ghostwhite"}>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" textAlign={"left"}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
