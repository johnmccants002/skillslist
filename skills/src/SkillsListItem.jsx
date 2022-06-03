import React from "react";
import './SkillsListItem.css'

function SkillsListItem({skill}) {

    return (
        <li className="SkillListItem">
            {skill.skillName} Level {skill.level}
        </li>
    );
}

export default SkillsListItem;