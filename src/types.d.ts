type Option = {
  text: string;
  isCorrect: boolean;
  clicked: boolean;
};

type Problem = {
  text: string;
  answer: string;
  index: number;
  termIndex: number;
  result?: boolean;
};
