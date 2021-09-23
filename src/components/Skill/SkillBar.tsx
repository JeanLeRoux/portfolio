import { FC, useState } from "react";

interface props{
    name: string,
    score:number
}

function coloredDiv(score:number) {
  const divs = [];
  for(let x = 1; x<=score;x++){
    divs.push(<div className={"active-border"}/>)
  }
  return divs;
}

function nonColoredDiv(nonScore:number) {
  const divs = [];
  for(let x = 1; x<=nonScore;x++){
    divs.push(<div className={"bar"}/>)
  }
  return divs;
}

const SkillBar: FC<props> = ({name, score}) => {
  return (
      <div className={"battery-container"}>
        <h3 className={"bar-heading"}>{name}</h3>
        <div className={"battery"}>
          {coloredDiv(score)}
          {nonColoredDiv(10-score)}
        </div>
      </div>
  );
};

export default SkillBar;

