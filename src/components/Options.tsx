import clsx from "clsx";
import styles from "./Options.module.css";

type OptionsProps = {
  options: Option[];
  onOptionClick: (option: Option) => () => void;
};

export default function Options({ options, onOptionClick }: OptionsProps) {
  return (
    <div className={styles.container}>
      {options.map((option, index) => {
        return (
          <div
            className={clsx([
              styles.option,
              !option.isCorrect && option.clicked && styles.wrong,
              option.isCorrect && option.clicked && styles.correct,
            ])}
            key={index}
            onClick={onOptionClick(option)}
          >
            <div className={styles.index}>{index + 1}</div>
            <div className={styles.text}>
              {option.text.replace(/\(.*?\)|（.*?）/g, "")}
            </div>
          </div>
        );
      })}
    </div>
  );
}
