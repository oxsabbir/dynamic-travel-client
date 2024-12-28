"use client";

import { useEffect, useState } from "react";

export default function useDataFetch(method, params) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async function () {
      try {
        setLoading(true);
        const mainData = params ? await method(params) : await method(params);
        setData(mainData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getData();
  }, [params]);

  return { data, loading, error };
}
