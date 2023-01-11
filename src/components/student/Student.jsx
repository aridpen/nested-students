import style from "./Student.module.scss";
import Score from "../score/Score";
export default function Student(props) {
  return (
    <div className={style.student}>
      <div className={style.bioContainer}>
        <h1 className={style.studentTitle}>{props.name} </h1>
        <p className={style.studentBio}>{props.bio}</p>
      </div>
      <div className={style.scoreContainer}>
        <Score data={props.data} />
      </div>
    </div>
  );
}
