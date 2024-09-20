import { Helmet } from "react-helmet-async";
import Layout from "../../../../components/layout";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../store/hooks";
import { ROUTES } from "../../../../router/routes";
import { formatCurrency } from "../../../../utils/formatCurrency";

const MarketDetail = () => {
  const { id } = useParams<{ id: string }>();

  const MarketDetail = useAppSelector(
    state => state.markets.marketsDetails?.data?.[+(id || 0)]
  );
  return (
    <>
      <Helmet title="Ramzinex | Market Detail" />
      <Layout>
        <div className="flex flex-col gap-4 h-full flex-1">
          <div className="flex-1 flex flex-col gap-6 items-center">
            <img
              src={MarketDetail?.logo}
              alt={MarketDetail?.name}
              className="w-[48px] h-[48px]"></img>

            <p className="text-[32px] text-text-high font-[200]">
              {MarketDetail?.persianName} ({MarketDetail?.symbol})
            </p>

            <div className="flex justify-between items-center w-full">
              <p className="text-text-low text-[18px]">نام انگلیسی</p>

              <p className="text-text-high text-[18px]">{MarketDetail?.name}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-text-low text-[18px]">قیمت</p>

              <p className="text-text-high text-[18px]">
                {MarketDetail?.internationalPrice}
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-text-low text-[18px]">تغییرات ۲۴ ساعته</p>

              <p className="text-text-high text-[18px]">{MarketDetail?.name}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-text-low text-[18px]">حجم معاملاتی</p>

              <p className="text-text-high text-[18px]">{MarketDetail?.name}</p>
            </div>
          </div>

          <div className="p-6 w-full">
            <Link
              to={ROUTES.MARKETS}
              replace
              className="w-full p-4 border border-neutral text-text-high rounded-lg inline-block text-center">
              بازگشت
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MarketDetail;
