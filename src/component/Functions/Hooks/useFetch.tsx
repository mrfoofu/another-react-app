import { useEffect, useState } from "react";

export const useFetch = (url: string): any => {
  const [state, setState] = useState({ data: null, data1: null, loading: true });

  useEffect(() => {
    setState(state => ({
      data: state.data,
      data1: state.data,
      loading: true
    }))
    fetch(url)
      .then((response: any) => response.text())
      .then((data: any) => {
        setState({
          data: data,
          data1: data,
          loading: false
        })
      });
  }, [url, setState]);

  return state;
};
