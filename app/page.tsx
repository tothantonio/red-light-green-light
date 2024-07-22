"use client";
import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import { useState, useEffect } from "react";

const words = faker.lorem.words(10);
 
const Page = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GeneratedWords words={words} />
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={() => null}
      />
      <Results
        className="mt-10"
        errors={10}
        accuracyPercentage={100}
        total={200}
      />
    </>
  );
};

const GeneratedWords = ({ words }: {words: string}) => {
  return <div className="text-3xl text center text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: {timeLeft: number}) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default Page;