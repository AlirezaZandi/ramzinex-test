import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";

import MarketsDetail from "../pages/markets/pages/market-detail";
import Markets from "../pages/markets";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.MARKETS} />} />
        <Route path={ROUTES.MARKETS} element={<Markets />} />
        <Route path={ROUTES.MARKET_DETAIL} element={<MarketsDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
