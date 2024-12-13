import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import Definitions from "./Definitions";
import { Game } from "../entities/Game";

interface Attributes {
  game: Game;
}

const GameAttributes = ({ game }: Attributes) => {
  return (
    <SimpleGrid as="dl" columns={2}>
      <Definitions terms="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </Definitions>

      <Definitions terms="Score">
        <CriticScore score={game.metacritic}></CriticScore>
      </Definitions>

      <Definitions terms="Genre">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </Definitions>
      <Definitions terms="Publishers">
        {game.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </Definitions>
    </SimpleGrid>
  );
};

export default GameAttributes;
