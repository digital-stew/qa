import './style.css'
import questions from './components/data'
import Question from './components/Question';
function App() {
  
  return (
    <div className='app'>
      <div className="title">
        <h1>Questions and Answers About Login</h1>{}
      </div>
      <div className="questions">
      {questions.map((e) => {
        return <Question key={e.id} {...e} />;
      })}
      </div>
    </div>
  );
}

export default App;
