import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
// import { useState } from "react";

interface Props {
  onSearch: (searchString: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  //   const [searchString, updateString] = useState("");
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput
          onSearch={(str) => {
            onSearch(str);
            // console.log(str);
          }}
        ></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
