import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedString: string;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedString,
}: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { data, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedString
  );
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={5}
      >
        {isLoading
          ? skeletons.map((s) => (
              <GameCardContainer>
                <GameCardSkeleton key={s} />
              </GameCardContainer>
            ))
          : null}

        {data.map((d) => (
          <GameCard key={d.id} game={d}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
