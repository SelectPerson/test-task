import {useSearchParams} from "react-router-dom";
import {useMemo} from "react";

export const useGetQueryParam = (param) => {
  const [searchParams] = useSearchParams();
  return useMemo(() => {
    return searchParams.get(param)
  }, [param]);
}