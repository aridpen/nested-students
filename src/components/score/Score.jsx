import style from "./Score.module.scss";
export default function Score(props) {
  return (
    <div className={style.score}>
      <h2 className={style.title}>
        Scores:{" "}
        {props.data.map((score, index) => (
          <p key={index}>
            Date:{score.date}
            Score:{score.score}
          </p>
        ))}
      </h2>
    </div>
  );
}
