import React from 'react';


function NewSkillForm() {

    return (
        <form>
              <label>
    Skill:
    <input type="text" name="skill" />
  </label>
  <label>
      Level:
      <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
  </label>
  <button>ADD SKILL
      </button>
        </form>
    )
}


export default NewSkillForm;