import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown, BsGlobe } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

import useGameStore from "../store";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiAtari, SiNintendo, SiSega } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons";

const PlatformFilter = () => {
  const { data } = usePlatforms();
  const selectedPlaformId = useGameStore((s) => s.gameQuery.platformId);
  const onSelectedPlaform = useGameStore((s) => s.setPlatformId);

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    atari: SiAtari,
    sega: SiSega,
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {data?.results.find((p) => p.id === selectedPlaformId)?.name ||
          "Platforms"}
      </MenuButton>
      <MenuList maxHeight="250px" overflowY="auto">
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlaform(platform.id)}
          >
            <Icon
              key={platform.id}
              as={iconMap[platform.slug]}
              color="gray.300"
              marginRight={2}
            />
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformFilter;
