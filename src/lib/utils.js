export async function getStock(sym) {
  try {
    const res = await fetch(`/api/search?keyword=${sym}&length=1`);

    if (!res.ok) throw new Error("Error in Stock Search fetch");

    return res.json();
  } catch (error) {
    console.log("Error in Stock Search fetch: ", error);
  }
}

export async function getStocks(sym) {
  try {
    const res = await fetch(`/api/search?keyword=${sym}&length=100`);

    if (!res.ok) throw new Error("Error in Stock Search fetch");

    return res.json();
  } catch (error) {
    console.log("Error in Stock Search fetch: ", error);
  }
}

export async function getStockPrices(sym) {
  try {
    const res = await fetch(`/api/stock-price/${sym}`);

    if (!res.ok) throw new Error("Error in Stock Price fetch");

    return res.json();
  } catch (error) {
    console.log("Error in Stock Price fetch: ", error);
  }
}
