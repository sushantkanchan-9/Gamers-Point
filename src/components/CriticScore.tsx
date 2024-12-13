import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color =
    score > 90 ? "green" : score > 85 ? "yellow" : score > 75 ? "white" : "";

  return (
    <Badge fontSize="14px" paddingX="2" borderRadius="5px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
