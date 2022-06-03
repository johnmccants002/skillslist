import React from 'react';
import { useState } from "react";
import SkillsList from './SkillsList'
import './NewSkillForm.css'

function NewSkillForm({addSkill}) {

    const [formData, setFormData] = useState(
        {
        skillName : "",
        level : 1
        }
    )

    function handleChange(event) {
        const newFormData = {...formData, [event.target.name]: event.target.value};
        setFormData(newFormData);
    }

    function handleNewSkill(event) {
        event.preventDefault();
        addSkill(formData);
        setFormData({skillName: "", level: 1});
   
    }

    return (
        <>
        <form className="NewSkillForm" onSubmit={handleNewSkill}>
            <label>
                Skill:
                <input onChange={handleChange}
                type="text" 
                name="skillName"
                pattern=".{4,}" 
                value={formData.skillName}
                />
            </label>
            <label>
            Level:
            <select name="level" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </label>
            <button type="submit">ADD SKILL
            </button>
        </form>
        <h1>Skill Name: {formData.skillName} Level: {formData.level}</h1>
        </>
    )
}


export default NewSkillForm;