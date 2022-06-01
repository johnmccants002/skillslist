import React from "react";
import SkillsListItem from "./SkillsListItem";
import './SkillsList.css'

function SkillsList({skills}) {
    return(
        <ul className="SkillsList">
            {skills.map((t, idx) => (
                <SkillsListItem skill={t} index={idx}/>
            ))}
        </ul>
    )
}

export default SkillsList;