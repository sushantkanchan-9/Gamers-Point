import {
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import useGameStore from "../store";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const GenreList = () => {
  const { data } = useGenres();
  const [showAll, setShowAll] = useState(false);

  const selectedGenre = useGameStore((s) => s.gameQuery.genreId);
  const setSelectedGenre = useGameStore((s) => s.setGenreId);
  const displayedGenres = showAll ? data.results : data.results.slice(0, 6);

  return (
    <>
      <Heading
        fontSize="32px"
        marginTop={9}
        marginBottom={3}
        textAlign={"left"}
      >
        Genres
      </Heading>
      <List>
        {displayedGenres.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                padding={1}
                display="inline-block"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                  transform: "scale(2.05)", // Moves the card up by 10px
                }}
                overflow="hidden"
              ></Image>
              <Button
                onClick={() => setSelectedGenre(genre.id)}
                fontWeight={genre.id === selectedGenre ? "800" : "500"}
                fontSize={genre.id == selectedGenre ? "2xl" : "xl"}
                whiteSpace="normal"
                textAlign="left"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
        <ListItem key={"Show_Hide"} paddingY="7px">
          <HStack>
            <Button
              onClick={() => setShowAll((prev) => !prev)}
              boxSize="30px"
              minWidth={"none"}
            >
              <Icon as={showAll ? FaChevronUp : FaChevronDown} />
            </Button>
            <span>{showAll ? "Hide" : "Show all"}</span>
          </HStack>
        </ListItem>
      </List>
    </>
  );
};

export default GenreList;
