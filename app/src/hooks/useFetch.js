import { useReducer, useEffect } from "react";
import { fetchReducer, initialState } from "../reducers/fetchReducer";

export const useFetch = (fetcher) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData(signal) {
      try {
        dispatch({ type: "FETCH_START" });
        const data = await fetcher(signal);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        if (err.name !== "AbortError") {
          dispatch({ type: "FETCH_ERROR", payload: err.message });
        }
      }
    }

    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, [fetcher]);

  return state;
};
