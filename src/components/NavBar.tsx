import { border, HStack, Image, useColorMode } from "@chakra-ui/react";
import riddlerLogo from "../assets/265255.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justify="space-between" padding={"10px"}>
      <Image
        src={riddlerLogo}
        title="kanchanSushant aka-riddler"
        boxSize="80px"
        width="130px"
        borderRadius={"10%"}
        border="4px solid"
        borderColor={colorMode == "dark" ? "yellow.400" : "purple.500"}
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
