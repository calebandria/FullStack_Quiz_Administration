import './App.css';
import QuestionQuery from './components/questions/QuestionQuery.component';
import QuestionCreate from './components/questions/QuestionCreate.component';
/* import { useState } from 'react'; */

function App() {
  /*   const [question, setQuestion] = useState(); */

  return (
    <div className='App'>
      <QuestionQuery />
      <QuestionCreate />
    </div>

  )
}

export default App;
