import SingleStockPage from "@/components/singleStockPage";
import { getStock, getStockPrices } from "@/lib/utils";
import { useRouter } from "next/router";
import Layout from "@/pages/stock/layout";
import { useEffect, useState } from "react";

export default function StockDetails() {
  const [stock, setStock] = useState([]);
  const [prices, setPrices] = useState([]);
  const [error, setError] = useState({
    error: false,
    errorMessage: "",
  });

  const router = useRouter();
  const symbol = router.query.symbol || "";

  useEffect(() => {
    (async function fetchStockDetails(sym = symbol) {
      const [stockResponseJSON, pricesResponseJSON] = await Promise.all([
        getStock(sym),
        getStockPrices(sym),
      ]);

      if (!stockResponseJSON?.success && !pricesResponseJSON?.success)
        setError({
          error: true,
          errorMessage: "Error fetcing stock details & prices.",
        });

      stockResponseJSON?.success
        ? setStock(stockResponseJSON?.data)
        : setError({ error: true, errorMessage: stockResponseJSON?.message });

      pricesResponseJSON?.success
        ? setPrices(pricesResponseJSON?.data)
        : setError({ error: true, errorMessage: pricesResponseJSON?.message });
    })();
  }, [symbol]);

  return (
    <>
      <section>
        {stock?.length && prices?.length && (
          <SingleStockPage stock={stock} prices={prices} />
        )}
      </section>
    </>
  );
}

StockDetails.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};
