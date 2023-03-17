import './App.css';
import QuestionQuery from './components/questions/QuestionQuery.component';
import QuestionCreate from './components/questions/QuestionCreate.component';

function App() {
  return(
    <div className='App'>
        <QuestionQuery />
        <QuestionCreate/>
    </div>
    
  )
}

export default App;
