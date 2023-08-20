import styles from "./Problem.module.css";

type ProblemProps = {
  problem: Problem;
};

export function Problem({ problem }: ProblemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.num}>No.{problem.index + 1}</div>
      <div className={styles.text}>{problem.text}</div>
    </div>
  );
}
