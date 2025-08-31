"use server";

import { host } from "@/lib/constants";

export default async function stockPrice(req, res) {
  try {
    const { stockName } = await req.query;
    let { days, type, limit } = await req.query;

    const data = await fetch(
      `${host}/api/assignment/stock/${stockName}/prices?days=${
        days ? days : "1"
      }&type=${type ? type : "INTRADAY"}&limit=${limit ? limit : "100"}`
    )
      .then((res) => res.json())
      .catch((err) => console.log("Stock Prices API Fetch Error \u2013", err));

    if (data.length === 0)
      res.status(200).json({
        message: "Prices not found.",
        success: true,
        data: [],
      });

    return res.status(200).json({
      message: "Stock Prices fetched successfully",
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
}
