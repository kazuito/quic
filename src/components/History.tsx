import styles from "./History.module.css";

type Props = {
  problems: Problem[];
};

export default function History({ problems }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>履歴</div>
      {problems.length === 0 ? (
        <div className={styles.empty_msg}>履歴はありません。</div>
      ) : (
        problems.slice(0, 10).map((problem, index) => {
          return <HistoryItem key={index} problem={problem} />;
        })
      )}
    </div>
  );
}

type HistoryItemProps = {
  problem: Problem;
};

function HistoryItem({ problem }: HistoryItemProps) {
  const problemTexts = problem.text.split("_____");

  return (
    <div className={styles.item_container}>
      <div className={styles.num}>No.{problem.index + 1}</div>
      <div className={styles.text}>
        {problemTexts[0]}
        <span className={styles.term}>{problem.answer}</span>
        {problemTexts[1]}
      </div>
    </div>
  );
}
