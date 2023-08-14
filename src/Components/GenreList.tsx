import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImages from "../services/getCroppedImages";

const GenreList = () => {
  const { data } = useGenres();
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
              <Text fontSize={"lg"}>{d.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
