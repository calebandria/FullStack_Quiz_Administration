import './App.css';
import QuestionQuery from './components/questions/QuestionQuery.component';
import QuestionCreate from './components/questions/QuestionCreate.component';
import { useState , useEffect} from 'react';

function App() {
    const [question, setQuestion] = useState([]);
    const [theme, setTheme] = useState([]);

    useEffect(()=>{
    fetch('http://localhost:5000/question/get')
        .then(response => response.json())
        .then(donnees =>{
          setQuestion(donnees.data);
        })
},[]);

    useEffect(()=>{
      fetch('http://localhost:5000/theme/get')
          .then(response => response.json())
          .then(donnees =>{
              setTheme(donnees.data);
          })
},[]);

  return (
    <div className='App'>
      <QuestionQuery quest= {question} />
      <QuestionCreate theme ={theme}/>
    </div>

  )
}

export default App;
