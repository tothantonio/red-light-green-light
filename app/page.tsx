"use client";

import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

 
const Page = () => {

  const { state, words, timeLeft, typed, errors, restart, totalTyped} = useEngine();

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} /> 
      <Red_light/>  <Green_light/>
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings 
          className="absolute inset-0" 
          words={words}
          userInput={typed} />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        state={state}
        className="mt-10"
        errors={10}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
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

const Red_light = () => {
  return <div className=" text center text-red-500">It&apos;s red!</div>
};

const Green_light = () => {
  return <div className=" text center text-green-500">It&apos;s green!</div>
};

export default Page;