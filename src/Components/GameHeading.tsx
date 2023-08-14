import { Heading } from "@chakra-ui/react";
import React from "react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
interface Props {
  genre: Genre | null;
  platform: Platform | null;
}
const GameHeading = ({ genre, platform }: Props) => {
  return (
    <Heading>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
