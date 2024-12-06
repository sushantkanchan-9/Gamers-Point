import {
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroopedIMGUrl from "../services/image-url";
import { useState } from "react";
//import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectGenre: Genre | null;
}

const GenreList = ({ selectGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  const [showAll, setShowAll] = useState(false);
  const displayedGenres = showAll ? data : data.slice(0, 6);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading
        fontSize="24px"
        marginTop={9}
        marginBottom={3}
        textAlign={"left"}
      >
        Genres
      </Heading>
      <List>
        {displayedGenres.map((genre) => (
          <ListItem key={genre.id} paddingY="7px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCroopedIMGUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id == selectGenre?.id ? "bold" : "normal"}
                fontSize={genre.id == selectGenre?.id ? "xlg" : "lg"}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                whiteSpace="normal"
                textAlign="left"
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
