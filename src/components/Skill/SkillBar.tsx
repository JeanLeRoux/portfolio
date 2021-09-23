import React, { FC } from "react";

interface props{
    name: string,
    percentage:string
}
const SkillBar: FC<props> = ({name, percentage}) => {
  return (
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
      </div>
  );
};

export default SkillBar;
