import "./styles.css";
import { Suspense } from "react";
import CustomLoader from "@/components/CustomLoader";
import HoverPrefetchLink from "@/components/HoverPrefetchLink";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="block sticky top-0 left-0 py-3 px-4 bg-black text-emerald-600 text-left z-[1000] shadow-black/50 shadow-sm">
        <HoverPrefetchLink href={`/search`}>
          <h1 className="font-sans font-bold text-xl">STOCK TICKER</h1>
        </HoverPrefetchLink>
      </header>
      <main className="relative block">
        <Suspense fallback={<CustomLoader />}>
          <Component {...pageProps} />
        </Suspense>
      </main>
    </>
  );
}
