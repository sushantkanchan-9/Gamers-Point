import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const headingText = `${gameQuery.platform?.name || ""} 
  ${gameQuery.genre?.name || ""} 
  ${gameQuery.searchText || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="72px" textAlign={"left"}>
      {headingText}
    </Heading>
  );
};

export default GameHeading;
