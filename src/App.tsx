import { useEffect, useState } from "react";

import { PROBLEMS_EUROPE_HIST } from "./constants/problems/europe-history";

import Options from "./components/Options";
import { Problem } from "./components/Problem";
import History from "./components/History";
import rndInt from "./utils/rndInt";
import styles from "./App.module.css";

function getRandTerm(problemText: string) {
  const termMatches = problemText.match(/\{\{.*?\}\}/g);

  console.log(problemText, termMatches);

  if (!termMatches) return { term: "", index: -1 };

  const index = rndInt(0, termMatches.length);
  const termText = termMatches[index];

  return { term: termText.replace(/\{\{|\}\}/g, ""), index: index };
}

function createProblem() {
  const PROBLEMS = PROBLEMS_EUROPE_HIST;

  const problemIndex = rndInt(0, PROBLEMS.length);
  const text = PROBLEMS[problemIndex];
  const { term: ansTerm, index: termIndex } = getRandTerm(text);
  const problemText = text
    .replace(`{{${ansTerm}}}`, "_____")
    .replace(/\{\{|\}\}/g, "");

  const options: Option[] = [];

  const ansIndex = rndInt(0, 4);

  for (let i = 0; i < 4; i++) {
    if (i === ansIndex) {
      options.push({ text: ansTerm, isCorrect: true, clicked: false });
    } else {
      options.push({
        text: getRandTerm(PROBLEMS[rndInt(0, PROBLEMS.length)]).term,
        isCorrect: false,
        clicked: false,
      });
    }
  }

  return {
    problem: {
      text: problemText,
      answer: ansTerm,
      index: problemIndex,
      termIndex: termIndex,
    },
    options,
  };
}

function App() {
  const [problem, setProblem] = useState<Problem>({
    text: "",
    answer: "",
    index: 0,
    termIndex: 0,
    result: true,
  });
  const [options, setOptions] = useState<Option[]>([]);
  const [history, setHistory] = useState<Problem[]>([]);

  useEffect(() => {
    newProblem();
  }, []);

  function newProblem() {
    const { problem: prob, options: opts } = createProblem();

    setProblem(prob);
    setOptions(opts);
  }

  const onOptionClick = (option: Option) => () => {
    setOptions((prev) => {
      return prev.map((opt) => {
        if (opt.text === option.text) {
          return { ...opt, clicked: true };
        }
        return opt;
      });
    });

    if (option.isCorrect) {
      setTimeout(() => {
        setHistory((prev) => {
          return [problem, ...prev];
        });
        newProblem();
      }, 100);
    } else {
      setProblem((prev) => {
        return { ...prev, result: false };
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.problem_section}>
        EUROPE
        <Problem problem={problem} />
        <Options options={options} onOptionClick={onOptionClick} />
      </div>
      <History problems={history} />
    </div>
  );
}

export default App;
