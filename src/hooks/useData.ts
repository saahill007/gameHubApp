import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface Response<T> {
    count: number;
    results: T[];
  }
const useData = <T>(url:string,requestConfig?: AxiosRequestConfig, deps?:any[]) => {
    const [isLoading, setLoading] = useState(false);
  const [data, setGames] = useState<T[]>([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<Response<T>>(url,{signal:controller.signal, ...requestConfig})
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
  }, deps?[...deps]:[]);

  return {data,error,isLoading}
}

export default useData