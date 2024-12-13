import { HStack, Image, useColorMode } from "@chakra-ui/react";
import riddlerLogo from "../assets/265255.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const borderColor = colorMode === "dark" ? "yellow.400" : "purple.500";
  return (
    <HStack justify="space-between" padding="10px">
      <Link to="/">
        <Image
          src={riddlerLogo}
          title="kanchanSushant aka-riddler"
          borderRadius="10%"
          border={["2px solid", "3px solid", "4px solid"]}
          borderColor={[borderColor, borderColor, borderColor]}
          width={["140px", "160px", "150px"]} // Responsive widths: mobile, tablet, desktop
          height="auto" // Maintain aspect ratio
        />
      </Link>

      <SearchBox />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
