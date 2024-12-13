import { Heading } from "@chakra-ui/react";

import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameStore from "../store";

const GameHeading = () => {
  const genreId = useGameStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameStore((s) => s.gameQuery.platformId);
  const platFormName = usePlatform(platformId);

  const heading = `${genre?.name || ""}  ${platFormName?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="72px" textAlign={"left"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
