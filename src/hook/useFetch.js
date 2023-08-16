import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setDate] = useState();

  useEffect(() => {
    makeAPicall();
  }, [endpoint]);

  const makeAPicall = async () => {
    const res = await fetchDataFromApi(endpoint);
    setDate(res);
  };

  return { data };
};

export default useFetch;
