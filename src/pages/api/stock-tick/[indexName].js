import { host } from "@/lib/constants";

export default async function stockTick(req, res) {
  try {
    const { indexName } = await req.query;

    const data = await fetch(`${host}/api/assignment/index/${indexName}/movers`)
      .then((res) => res.json())
      .catch((err) => console.log("Stock Ticker API Fetch Error \u2013", err));

    if (data.length === 0)
      res.status(200).json({
        message: "Stock index not found",
        success: true,
      });

    return res.status(200).json({
      message: "Stock Ticker JSON",
      success: true,
      data,
    });
  } catch (error) {
    console.log("Error in /api/stock-tick :", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
}
