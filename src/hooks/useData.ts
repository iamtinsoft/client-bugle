import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [initialData, setInitialData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<T[]>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          let { data } = res;

          const params = requestConfig?.params;
          const { property, search } = params;
          setInitialData(data);
          if (search) {
            const filtered = data.filter((u: any) =>
              u[property ? property : "first_name"]
                .toLowerCase()
                .startsWith(search.toLowerCase())
            );
            setData(filtered);
          } else {
            setData(data);
          }
          // setData(data);
          setLoading(false);
          // setTimeout(() => {

          // }, 1000);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading, initialData };
};

export default useData;
