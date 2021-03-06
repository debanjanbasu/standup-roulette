import Head from "next/head";
import dynamic from "next/dynamic";
import Timer from "../components/timer";
import { useState } from "react";

const DynamicWheelComponentWithoutSSR = dynamic(
  () => import("../components/roulette"),
  {
    ssr: false,
    loading: () => <p>Building Roulette Wheel...</p>,
  }
);

//random color will be freshly served
const generateRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const initialAttendees = [
  "Chaitu",
  "Aravind",
  "Sai",
  "Ben",
  "Andrei",
  "Jannette",
  "Daisy",
  "Abdul",
  "Sijo",
  "Rino",
  "Shine",
  "Dan",
].map((name) => {
  return {
    option: name,
    style: { backgroundColor: generateRandomColor() },
  };
});

export default function Home() {
  // Declare the state of the attendees
  const [attendees, setAttendees] = useState(initialAttendees);
  const [timerFor, setTimerFor] = useState(null);
  // 30 minute meeting - 1800
  const individualTime = 1800 / initialAttendees.length;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        <DynamicWheelComponentWithoutSSR
          attendees={attendees}
          setAttendees={setAttendees}
          setTimerFor={setTimerFor}
        />
        <h4>Yayyyy!!! {timerFor}</h4>
        <Timer
          individualTime={individualTime}
          timerFor={timerFor}
          setTimerFor={setTimerFor}
        />
      </main>
    </>
  );
}
