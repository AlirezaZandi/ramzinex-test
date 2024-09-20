import { createSlice } from "@reduxjs/toolkit";
import { Market, MarketDetails } from "../../types/markets";
import { ApiCallResponse } from "../../types/apiCalls";
import { createAppAsyncThunk } from "../withTypes";
import { getMarkets, getMarketsDetails } from "../../api";
import { RootState } from "..";
import { WithSearchable } from "../../types/withSearchable";

type MarketsSliceState = {
  markets: ApiCallResponse<WithSearchable<Market>[]>;
  marketsDetails: ApiCallResponse<NormalizedMarketDetail>;
};

type NormalizedMarketDetail = {
  [key in MarketDetails["id"]]: MarketDetails;
};

const initialState: MarketsSliceState = {
  markets: {
    status: "idle",
    data: null,
    error: null,
  },

  marketsDetails: {
    status: "idle",
    data: null,
    error: null,
  },
};

export const fetchMarkets = createAppAsyncThunk(
  "markets/fetchMarkets",
  async () => {
    return await getMarkets();
  }
);

export const fetchMarketsDetails = createAppAsyncThunk(
  "markets/fetchMarketsDetails",
  async () => {
    return await getMarketsDetails();
  }
);

const marketsSlice = createSlice({
  name: "markets",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchMarkets.pending, state => {
      if (state.markets.status === "succeeded") {
        state.markets.status = "refetching";
      } else {
        state.markets.status = "loading";
      }
    });

    builder.addCase(fetchMarkets.fulfilled, (state, action) => {
      state.markets.status = "succeeded";
      const withSearchable = action.payload.map(market => ({
        ...market,
        searchable: `${market.name.fa}-${market.name.en}-${market.sell}`,
      }));

      state.markets.data = withSearchable;
    });

    builder.addCase(fetchMarkets.rejected, (state, action) => {
      state.markets.status = "failed";
      state.markets.error = action.error;
    });

    builder.addCase(fetchMarketsDetails.pending, state => {
      if (state.marketsDetails.status === "succeeded") {
        state.marketsDetails.status = "refetching";
      } else {
        state.marketsDetails.status = "loading";
      }
    });

    builder.addCase(fetchMarketsDetails.fulfilled, (state, action) => {
      state.marketsDetails.status = "succeeded";
      state.marketsDetails.data = {
        ...action.payload.reduce((acc, market) => {
          acc[market.id] = market;
          return acc;
        }, {} as NormalizedMarketDetail),
      };
    });

    builder.addCase(fetchMarketsDetails.rejected, (state, action) => {
      state.marketsDetails.status = "failed";
      state.marketsDetails.error = action.error;
    });
  },
});

export const selectMarketsBySearchTerm = (
  state: RootState,
  searchTerm: string
) => {
  return (
    state.markets.markets.data?.filter(market =>
      market.searchable.includes(searchTerm)
    ) || []
  );
};

export default marketsSlice.reducer;
