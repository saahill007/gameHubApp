import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImages from "../services/getCroppedImages";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card maxW="sm" borderRadius={10} overflow={"hidden"}>
        <Image src={getCroppedImages(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
