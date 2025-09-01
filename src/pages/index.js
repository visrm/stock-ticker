import RootLayout from "@/pages/layout";
import Search from "./_search";

export default function Home() {
  return (
    <>
      <main className="relative block">
        <Search />
      </main>
    </>
  );
}

Home.getLayout = function getLayoutPage(page) {
  return <RootLayout>{page}</RootLayout>;
};
