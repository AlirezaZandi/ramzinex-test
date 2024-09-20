import { MarketDetails, Market } from "../types/markets";
import { deepCamelCase } from "../utils/deepCamelCase";

export const getMarkets = async () => {
  const response = await fetch(
    "https://publicapi.ramzinex.com/exchange/api/v1.0/exchange/pairs"
  );

  return deepCamelCase((await response.json()).data) as Market[];
};

export const getMarketsDetails = async () => {
  const response = await fetch(
    "https://publicapi.ramzinex.com/exchange/api/v1.0/exchange/currencies"
  );

  return deepCamelCase((await response.json()).data) as MarketDetails[];
};
