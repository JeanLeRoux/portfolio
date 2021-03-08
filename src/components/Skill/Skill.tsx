import React, {useState} from "react";
import Headings from "../Common/Headings/Headings";
import "../Skill/Skill.scss";
import SkillBar from "./SkillBar";

interface languageType{
  name: string
  percentage: string
}

export default function Skill() {
  const [languages, setLanguages] = useState<languageType[]>(
    [
      {
        'name':'PYTHON',
        'percentage':'70%'
      },
      {
        'name':'HTML',
        'percentage':'30%'
      },
      {
        'name':'CSS',
        'percentage':'70%'
      },
      {
        'name':'REACT',
        'percentage':'70%'
      },
      {
        'name':'JAVA',
        'percentage':'70%'
      },
      {
        'name':'JAVASCRIPT',
        'percentage':'70%'
      },
    ]
    );
  return (
    <div className={"skill-background"}>
      <Headings headingOne={"SERVICES"} headingTwo={"What I Am Good At"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}/>
      <div className={"batteries"}>
        {languages.map((language)=>(
          <SkillBar name={language.name} percentage={language.percentage}/>
        ))}
      </div>
    </div>
  );
}