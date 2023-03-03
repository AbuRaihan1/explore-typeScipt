import React from "react";
type userProps = {
  name: string;
  age: number;
  isAdult: boolean;
  lang: string[];
  skill: {
    isHePlayed: boolean;
    heGoesSchool: string;
    howManyYearsHeLeanProgramming: number;
  };
};
const User = ({ name, age, isAdult, lang, skill }: userProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>{isAdult ? "he is a adult" : "he is not a adult"}</p>
      <p>
        {lang.map((language, idx) => {
          return <span key={idx}>{language} </span>;
        })}
      </p>
      <p>{skill.isHePlayed ? "se khela kore" : "se khela kore na"}</p>
    </div>
  );
};

export default User;
