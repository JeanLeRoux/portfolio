import React, { FC } from "react";

interface props{
    name: string,
    percentage:string
}
const SkillBar: FC<props> = ({name, percentage}) => {
  return (
    <div>
      <div className={"battery-container"}>
        <h3 className={"bar-heading"}>{name}</h3>
        <div className={"battery"}>
          <div className={"active-border"}></div>
          <div className={"bar"}></div>
          <div className={"bar"}></div>
          <div className={"bar"}></div>
          <div className={"bar"}></div>
          <div className={"bar"}></div>
          <div className={"bar"}></div>
          <div className={"bar"}></div>
          <div className={"bar"}></div>
          <div className={"bar"}></div>
        </div>
        <h3 className={"bar-percentage"}>{percentage}</h3>
      </div>
    </div>
  );
};

export default SkillBar;
