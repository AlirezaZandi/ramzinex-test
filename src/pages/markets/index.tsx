import { Helmet } from "react-helmet-async";
import { useInitializeMarkets } from "./hooks/useInitializeMarkets";
import Layout from "../../components/layout";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

import Search from "./components/search";
import Table from "./components/table";
import { useTheme } from "../../context/theme";

const Markets = () => {
  const { setTheme, theme } = useTheme();
  useInitializeMarkets();

  return (
    <Layout>
      <Helmet title="Ramzinex | Markets" />

      <div className="flex gap-2 items-center sticky top-0 bg-background">
        <Search />
        {theme === "light" ? (
          <AiOutlineMoon
            size={25}
            className="fill-text-high cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <AiOutlineSun
            size={25}
            className="fill-text-high cursor-pointer"
            onClick={() => setTheme("light")}
          />
        )}
      </div>

      <div className="py-4">
        <Table />
      </div>
    </Layout>
  );
};

export default Markets;
