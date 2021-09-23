import React, {useState} from "react";
import Headings from "../Common/Headings/Headings";
import "../Skill/Skill.scss";
import SkillBar from "./SkillBar";

interface languageType{
  name: string
  score: number
}

export default function Skill() {
  const [languages,] = useState<languageType[]>(
    [
      {
        'name':'PYTHON',
        'score':8
      },
      {
        'name':'HTML',
        'score':8
      },
      {
        'name':'CSS',
        'score':8
      },
      {
        'name':'REACT',
        'score':8
      },
      {
        'name':'AWS',
        'score':8
      },
      {
        'name':'JAVASCRIPT',
        'score':8
      },
    ]
    );
  return (
    <div className={"skill-background"}>
      <Headings headingOne={"SERVICES"} headingTwo={"What I Am Good At"} paragraph={""}/>
      <div className={"batteries"}>
        {languages.map((language)=>(
          <SkillBar name={language.name} score={language.score}/>
        ))}
      </div>
    </div>
  );
}
