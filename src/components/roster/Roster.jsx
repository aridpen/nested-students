import style from "./Roster.module.scss";
import Student from "../student/Student";
import data from "../../data/data";

export default function Roster(props) {
  return (
    <div className={style.roster}>
      <h1 className={style.title}> Student Roster </h1>
      <div className={style.studentContainer}>
        {data.map((student, index) => (
          <Student
            key={index}
            name={student.name}
            bio={student.bio}
            data={student.scores}
          />
        ))}
      </div>
    </div>
  );
}
