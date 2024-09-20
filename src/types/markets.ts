export type Market = {
  amountStep: number;
  baseCurrencyId: number;
  baseCurrencySymbol: {
    en: string;
    fa: string;
  };
  baseCurrencySymbolNumber: number; // Assuming this was incorrectly typed as number earlier
  buy: number;
  cryptoBox: number;
  financial: {
    last24h: {
      baseVolume: number;
      changePercent: number;
      close: number;
      highest: number;
      lowest: number;
      open: number;
      quoteVolume: number;
    };
  };
  icon: string;
  isDelist: number;
  logo: string;
  name: {
    en: string;
    fa: string;
  };
  pairId: number;
  pricePrecision: number;
  priceStep: number;
  quoteCurrencyId: number;
  quoteCurrencySymbol: {
    en: string;
    fa: string;
  };
  quotePrecision: number;
  sell: number;
  showOrder: number;
  tvSymbol: {
    international: string;
    ramzinex: string;
  };
  urlName: string;
  webLink: string;
};

export type MarketDetails = {
  color: string;
  cryptoBox: number;
  deposit: number;
  factor: number;
  hasTag: boolean;
  icon: string;
  id: number;
  internationalPrice: number | null;
  logo: string;
  name: string;
  persianName: string;
  precision: number;
  relatedPairs: number[];
  rialRelatedPair: number;
  showOrder: number;
  showPrecision: number;
  symbol: string;
  urlName: string;
  withdraw: number;
  withdrawFee: number;
};
