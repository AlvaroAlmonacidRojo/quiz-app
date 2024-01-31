import { useEffect, useState } from "react";

interface Response<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(get: () => Promise<T>): Response<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await get();
        setData(result);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [get]);

  return { data, loading, error };
};

export default useFetch;
