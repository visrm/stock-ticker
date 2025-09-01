import "./styles.css";
import { Suspense } from "react";
import CustomLoader from "@/components/CustomLoader";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="block sticky top-0 left-0 py-3 px-4 bg-black text-emerald-600 text-left z-[1000] shadow-black/50 shadow-sm">
        <Link href={`/`} prefetch={true}>
          <h1 className="font-sans font-bold text-xl">STOCK TICKER</h1>
        </Link>
      </header>
      <main className="relative block">
        <Suspense
          fallback={
            <div
              role="status"
              aria-label="Loading"
              className="loading loading-lg loading-spinner text-white"
            />
          }
        >
          <Component {...pageProps} />
        </Suspense>
      </main>
    </>
  );
}
