import React, { PropsWithChildren } from "react";
import { useAppSelector } from "../../../store/hooks";
import { formatCurrency } from "../../../utils/formatCurrency";
import clsx from "clsx";
import { selectMarketsBySearchTerm } from "../../../store/slices/markets";
import { useSearchFilter } from "../hooks/useSearchFilter";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/routes";

const Table = () => {
  const { searchTerm } = useSearchFilter();

  const markets = useAppSelector(state =>
    selectMarketsBySearchTerm(state, searchTerm)
  );

  const getRoute = (id: number) => {
    return ROUTES.MARKET_DETAIL.replace(":id", id.toString());
  };

  const renderData = () => {
    if (markets) {
      return markets.map(market => {
        return (
          <React.Fragment key={market.pairId}>
            <Link to={getRoute(market.baseCurrencyId)}>
              <TableRow className="cursor-pointer">
                <div className="flex gap-4 items-center ">
                  <img
                    src={market.logo}
                    alt={market.baseCurrencySymbol.fa}
                    className="w-12 h-12"
                  />
                  <p className="text-text-high text-[24px] font-[200]">
                    {market.name.fa} ({market.baseCurrencySymbol.en})
                  </p>
                </div>
                <div className="flex gap-4 items-center ">
                  <p className="text-text-low text-[24px] font-[200] uppercase">
                    {market.quoteCurrencySymbol.en}
                  </p>
                  <p className="text-text-high text-[24px] font-[200]">
                    {formatCurrency(market.sell)}
                  </p>
                </div>
              </TableRow>
            </Link>
            <hr className="border-neutral" />
          </React.Fragment>
        );
      });
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <TableRow>
        <p className="text-text-low font-bold text-[16px] flex gap-4 items-center">
          نام
        </p>

        <p className="text-text-low font-bold text-[16px] flex gap-4 items-center">
          آخرین قیمت
        </p>
      </TableRow>

      {renderData()}
    </div>
  );
};

type TableRowProps = {
  className?: string;
  id?: string;
};

const TableRow = ({
  children,
  className,
  id,
}: PropsWithChildren<TableRowProps>) => {
  return (
    <div
      id={id}
      className={clsx(
        "flex flex-row justify-between py-4 items-center",
        className
      )}>
      {children}
    </div>
  );
};

export default Table;
