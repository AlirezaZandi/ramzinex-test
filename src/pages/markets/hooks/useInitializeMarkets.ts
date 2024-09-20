import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  fetchMarkets,
  fetchMarketsDetails,
} from "../../../store/slices/markets";
import { useAsyncCallInterval } from "../../../hooks/useAsyncCallInterval";

const REFRESH_RATE = 20 * 1000; //20 sec;

export const useInitializeMarkets = () => {
  const dispatch = useAppDispatch();
  const markets = useAppSelector(state => state.markets.markets);
  const marketsDetails = useAppSelector(state => state.markets.marketsDetails);

  const fetchData = useCallback(async () => {
    const promises = [];
    if (markets.status === "idle") {
      promises.push(dispatch(fetchMarkets()));
    }

    if (marketsDetails.status === "idle") {
      promises.push(dispatch(fetchMarketsDetails()));
    }

    await Promise.all(promises);
  }, [dispatch, markets.status, marketsDetails.status]);

  useAsyncCallInterval(fetchData, REFRESH_RATE);
};
