
import useData from './useData';
import { Genre } from './useGenres';


export interface Platform{
    id:number;
    name: string;
    slug: string;
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
  }

const useGames = (selectedGenre:Genre |null, selectedPlatform:Platform | null,selectedString:string) => {
    const {data,error,isLoading} = useData<Game>("/games",{params:{genres:selectedGenre?.id, platforms:selectedPlatform?.id, search:selectedString}}, [selectedGenre?.id,selectedPlatform?.id,selectedString]);
  return {data,error,isLoading}
}

export default useGames