import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';


export interface Genre {
    id: number;
    name: string;
    
  }
interface GenreResponse {
    count: number;
    results: Genre[];
  }
const useGenres = () => {
    const [isLoading, setLoading] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GenreResponse>("/genres",{signal:controller.signal})
      .then((res) => {
        setLoading(false);
        setGenres(res.data.results);
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

  return {genres,error,isLoading}
}

export default useGenres;