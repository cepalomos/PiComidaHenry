import axios from "axios";
import { useEffect, useState } from "react";

export  const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async (url) => {
      try {
        const res = await axios.get(url);
        const { data } = res;
        setLoading(false);
        setData(data);
        setError("");
      } catch (error) {
        setError("hay un error");
      }
    };
    getData(url);
  }, []);
  return { data, error, loading };
};
