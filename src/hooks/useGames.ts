import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';


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
interface GamesResponse {
    count: number;
    results: Game[];
  }
const useGames = () => {
    const [isLoading, setLoading] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GamesResponse>("/games",{signal:controller.signal})
      .then((res) => {
        setLoading(false);
        setGames(res.data.results);
        setError("");
        
      })
      .catch((err) => {
        if (err instanceof CanceledError){
            return;
        }
        setError(err.message)});
        setLoading(false);

      return ()=>controller.abort();
  }, []);

  return {games,error,isLoading}
}

export default useGames