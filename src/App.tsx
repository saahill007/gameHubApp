import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import GameHeading from "./Components/GameHeading";

function App() {
  const [selectGenre, updateSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, updateSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [searchString, updateSearchString] = useState("");
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(str) => {
              updateSearchString(str);
              console.log(searchString);
            }}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              selectedGenre={selectGenre}
              onSelectGenre={(genre) => {
                updateSelectedGenre(genre);
                // console.log(genre);
              }}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <GameHeading
            genre={selectGenre}
            platform={selectedPlatform}
          ></GameHeading>
          <PlatformSelector
            onselectPlatform={(platform: Platform) =>
              updateSelectedPlatform(platform)
            }
            selectedPlatform={selectedPlatform}
          ></PlatformSelector>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectGenre}
            selectedString={searchString}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
