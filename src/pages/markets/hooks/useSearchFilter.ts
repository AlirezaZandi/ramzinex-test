import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

const SEARCH_KEY = "s";

export const useSearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get(SEARCH_KEY) || "";

  const setSearchTerm = useCallback(
    (searchTerm: string) => {
      if (!searchTerm) {
        setSearchParams({});
      } else {
        setSearchParams({ [SEARCH_KEY]: searchTerm });
      }
    },
    [setSearchParams]
  );

  return { searchTerm, setSearchTerm };
};
