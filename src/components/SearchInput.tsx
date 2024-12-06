import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import { useRef } from "react";
import { IoGameController } from "react-icons/io5";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement
          children={
            <IoGameController size={25} style={{ marginLeft: "9px" }} />
          }
          pointerEvents="none"
          color="gray.400"
        />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder=" | Search games..."
          variant="filled"
          borderColor={colorMode == "dark" ? "darkslategrey" : "transparent"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
