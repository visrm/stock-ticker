"use client";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ApexStockChart({ chartData, chartOptions }) {
  return (
    <>
      <div id="stock-chart" className="bg-white/5 backdrop-blur p-4 rounded-md text-black">
        <Chart
          options={chartOptions}
          series={chartData}
          type="candlestick"
          height={360}
        />
      </div>
    </>
  );
}
