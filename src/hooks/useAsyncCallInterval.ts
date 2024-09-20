import { useEffect, useRef } from "react";

export const useAsyncCallInterval = (
  asyncCallBack: () => Promise<unknown>,
  interval: number
) => {
  const intervalRef = useRef<number | null>(null);

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const startTimer = () => {
      asyncCallBack().then(() => {
        intervalRef.current = setTimeout(startTimer, interval);
      });
    };

    startTimer();

    return stopInterval;
  }, [asyncCallBack, interval]);

  return stopInterval;
};
