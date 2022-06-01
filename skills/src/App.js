import logo from './logo.svg';
import './App.css';
import SkillsList from './SkillsList'
import NewSkillForm from './NewSkillForm'

const skills = [
  "Javascript",
  "Swift",
  "HTML",
  "CSS",
  "Python"
];

function App() {
  return (
    <div className="App">
      <h1>React Skills</h1>
      <SkillsList skills={skills}/>
      <NewSkillForm />
    </div>
  );
}

export default App;
