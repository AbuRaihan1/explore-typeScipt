import React from "react";
type userProps = { name: string; age: number; isAdult: boolean };
const User = ({ name, age, isAdult }: userProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>{isAdult ? "he is a adult" : "he is not a adult"}</p>
    </div>
  );
};

export default User;
