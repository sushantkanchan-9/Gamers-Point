import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  text: string;
}

const ExpandedText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 800;

  if (text.length <= 300) return <Text>{text}</Text>;

  const summarized = expanded ? text : text.substring(0, limit) + "... ";
  return (
    <>
      {summarized} {expanded ? <br /> : ""}
      <Button
        colorScheme={expanded ? "yellow" : "green"}
        fontWeight="bold"
        size="xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "< Read Less" : "Read More >>"}
      </Button>
    </>
  );
};

export default ExpandedText;
