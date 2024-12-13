import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const ScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (error) throw error;

  if (isLoading) return <Spinner />;

  const images = data?.results;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {images?.map((file) => (
        <Image key={file.id} src={file.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default ScreenShots;
