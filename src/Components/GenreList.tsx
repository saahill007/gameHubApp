import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImages from "../services/getCroppedImages";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { isLoading, data } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((d) => (
          <ListItem key={d.id}>
            <HStack paddingY={2}>
              <Image
                src={getCroppedImages(d.image_background)}
                boxSize={"32px"}
                borderRadius={8}
              ></Image>
              <Button
                fontWeight={selectedGenre?.id === d.id ? "bold" : "normal"}
                fontSize={"lg"}
                onClick={() => onSelectGenre(d)}
                variant={"link"}
              >
                {d.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
