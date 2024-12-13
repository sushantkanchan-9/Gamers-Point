import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import { useRef } from "react";
import useGameStore from "../store";
import { useNavigate } from "react-router-dom";
import { IoGameController } from "react-icons/io5";

const SearchBox = () => {
  const ref = useRef<HTMLInputElement>(null);
  const searchText = useGameStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          searchText(ref.current.value);
          navigate("/");
          // ref.current.value = "";
        }
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
        ;
      </InputGroup>
    </form>
  );
};

export default SearchBox;
