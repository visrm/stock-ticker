"use client";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import dayjs from "dayjs";

const DynamicApexStockChart = dynamic(
  () => import("@/components/ApexStockChart"),
  {
    ssr: false,
  }
);

export default function SingleStockPage({ stock, prices }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData([
      {
        name: "stock data",
        data: prices.map((item) => ({
          x: item.date,
          y: [item.open, item.high, item.low, item.close],
        })),
      },
    ]);
  }, [prices]);

  const chartOptions = {
    chart: {
      height: 360,
      type: "candlestick",
      selection: {
        enabled: true,
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoomin: true,
          zoomout: true,
        },
      },
    },
    title: {
      text: "Stocks Chart",
      align: "left",
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: function (val) {
          return dayjs(val).format("MMM DD HH:mm");
        },
      },
    },
    yaxis: {
      show: true,
      beginAtZeo: true,
      tooltip: {
        enabled: true,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#008000",
          downward: "#ff0000",
        },
      },
    },
  };

  return (
    <>
      <section className="flex flex-col flex-nowrap gap-2 py-10 sm:py-12 px-6 sm:px-8 mx-auto w-full max-w-full">
        <div className="p-4 sm:px-6 block w-full max-w-full h-full text-left">
          <h3 className="text-lg font-medium text-emerald-600">
            {stock[0]?.company}
          </h3>
        </div>
        <Suspense
          fallback={
            <div
              role="status"
              aria-label="Loading"
              className="loading loading-lg loading-spinner"
            />
          }
        >
          <div className="p-4 block w-full max-w-[90%] h-full text-left">
            {chartData.length > 0 && (
              <DynamicApexStockChart
                chartData={chartData}
                chartOptions={chartOptions}
              />
            )}
          </div>
        </Suspense>
      </section>
    </>
  );
}
