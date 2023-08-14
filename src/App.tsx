import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"red"}>
            Aside
          </GridItem>
        </Show>

        <GridItem area={"main"} bg={"gold"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;