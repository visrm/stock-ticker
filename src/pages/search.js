"use client";

import HoverPrefetchLink from "@/components/HoverPrefetchLink";
import { getStocks } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  async function fetchSearchResults(key) {
    const resultJSON = await getStocks(key);
    resultJSON?.success ? setData(resultJSON?.data) : null;
  }

  useEffect(() => {
    fetchSearchResults(input);
  }, [input]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchResultJSON = await getStocks(input);
    searchResultJSON?.success ? setData(searchResultJSON?.data) : null;
  };

  return (
    <>
      <section className="relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-white">
        <article className="my-auto flex flex-col flex-nowrap gap-2 w-fit">
          <form
            onSubmit={handleSubmit}
            method="GET"
            className="block h-full w-full max-w-full"
          >
            <label className="input input-lg w-90 text-base outline-none focus:outline-none border-2 border-grey-300">
              <svg
                className="h-[1em] opacity-50 text-white/75"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="text"
                name="search"
                id="search"
                required
                className="w-90"
                placeholder="Search"
                value={input}
                onChange={(e) => {
                  return setInput(e.target.value);
                }}
              />
            </label>
          </form>

          {input && data.length > 0 && (
            <ul
              className="list bg-base-100 shadow-md overflow-auto text-left h-full w-full"
              id="data-list"
            >
              <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                Search Suggestions
              </li>

              {data.map((item) => (
                <li
                  className="list-row rounded-md overflow-auto"
                  key={`${item}-${Math.random()}`}
                >
                  <HoverPrefetchLink
                    className={"flex flex-row flex-nowrap gap-2"}
                    href={`/stock/${item?.symbol}`}
                  >
                    <div>
                      <div>{item?.company}</div>
                      <div className="text-xs uppercase font-semibold opacity-60">
                        {item?.type}
                      </div>
                    </div>
                    {item.symbol && (
                      <span className="btn btn-xs btn-disabled font-mono w-fit">
                        {item?.symbol}
                      </span>
                    )}
                  </HoverPrefetchLink>
                </li>
              ))}
            </ul>
          )}
        </article>
      </section>
    </>
  );
}
