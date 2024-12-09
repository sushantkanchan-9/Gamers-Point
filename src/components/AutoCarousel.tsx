import { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Screenshot } from "../hooks/useGames";

interface Props {
  screenshots: Screenshot[];
}
function AutoCarousel({ screenshots }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 3000); // Slide changes every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [screenshots.length]);

  return (
    <Box
      width="full"
      maxW="600px"
      mx="auto"
      overflow="hidden"
      borderRadius="lg"
    >
      <Image
        src={screenshots[currentIndex].image} // Access the `image` field from each screenshot object
        alt={`Screenshot ${currentIndex + 1}`}
        width="full"
        height="150px"
        objectFit="cover"
        transition="transform 0.5s ease"
      />
    </Box>
  );
}

export default AutoCarousel;
