import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      display="inline-block"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: "scale(1.05)", // Moves the card up by 10px
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
