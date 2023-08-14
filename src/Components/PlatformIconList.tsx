import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    web: BsGlobe,
    nintendo: SiNintendo,
    mac: FaApple,
  };

  return (
    <>
      <HStack marginY={2}>
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500">
            {platform.name}
          </Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
