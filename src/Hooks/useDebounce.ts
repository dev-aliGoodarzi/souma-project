// React
import { useEffect, useRef } from "react";
// React

export const useDebounce = (
  delayMilliseconds: number,
  cb: () => void,
  isSingle: boolean = false
) => {
  const isDone = useRef<boolean>(false);

  useEffect(() => {
    if (isDone.current) return;
    const timeout = setTimeout(cb, delayMilliseconds);
    if (isSingle) {
      isDone.current = true;
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [cb, delayMilliseconds, isSingle]);
};
