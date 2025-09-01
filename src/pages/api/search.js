import { host } from "@/lib/constants";

export default async function search(req, res) {
  try {
    const { keyword, length } = await req.query;

    const data = await fetch(
      `${host}/api/assignment/search?keyword=${keyword}&length=${length || 100}`
    )
      .then((response) => response.json())
      .catch((err) => console.log("Stock Search API Fetch Error \u2013", err));

    if (data.length === 0)
      res.status(200).json({
        message: "No Matching Stocks found.",
        success: true,
        data: [],
      });

    return res.status(200).json({
      message: "Stocks fetched successfully",
      success: true,
      data,
    });
  } catch (error) {
    console.log("Error in /api/search :", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
}
