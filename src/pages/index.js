import Search from "@/components/Search";
import RootLayout from "@/pages/layout";

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
