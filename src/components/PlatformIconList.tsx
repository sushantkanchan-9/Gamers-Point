import {
  FaAndroid,
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

import { Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../entities/Platform";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };

  return (
    <HStack marginY={"5px"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.400"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
