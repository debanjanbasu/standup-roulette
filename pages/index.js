import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicWheelComponentWithoutSSR = dynamic(
  () => import("../components/roulette"),
  {
    ssr: false,
    loading: () => <p>Building Roulette Wheel...</p>,
  }
);

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <DynamicWheelComponentWithoutSSR />
      </main>
    </>
  );
}
