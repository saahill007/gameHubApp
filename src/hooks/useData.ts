import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Response<T> {
    count: number;
    results: T[];
  }
const useData = <T>(url:string) => {
    const [isLoading, setLoading] = useState(false);
  const [data, setGames] = useState<T[]>([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<Response<T>>(url,{signal:controller.signal})
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

  return {data,error,isLoading}
}

export default useData