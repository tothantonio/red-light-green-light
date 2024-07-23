"use client"

import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";

 
const Page = () => {

  const { state, words, timeLeft } = useEngine();

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} /> 
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings className="absolute inset-0" userInput={"test"} />
      </WordsContainer>
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

const WordsContainer = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
      {children}
    </div>
  );
};

const GeneratedWords = ({ words }: {words: string}) => {
  return <div className=" text center text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: {timeLeft: number}) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default Page;