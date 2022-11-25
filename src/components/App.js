import '../styles/App.scss';
import {useState} from "react";
function App() {
  const  [numberOfErrors, setNumberOfErrors] = useState(0)
  const [lastLetter, setlastLetter] = useState('')
  const [word, setWord] = useState('katakroker')
  const [userLastLetter, setUserLastLetter] = useState([])
 // setNumberOfErrors(numberOfErrors + 1);
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
     return wordLetters.map((eachLetter, index) => {
      if (userLastLetter.includes(eachLetter)){
       return <li key={index} className="letter">{eachLetter}</li>
    } else {
      return <li key={index} className="letter"></li>
    };
  })
  }

  const renderErrorLetters = () => {
    return userLastLetter.map((eachLetter, index) => {
      if (!word.includes(eachLetter)){
       return <li key={index} className="letter">{eachLetter}</li>
      };
   })
  }

  const handleInput = (event) => {
    
    const regExInput = /^[a-zA-Z]|[à-ü]|[À-Ü]+$/;
    if (regExInput.test(event.target.value)){
      setlastLetter(event.target.value);
      setUserLastLetter([...userLastLetter, event.target.value]);
     } else {
      setlastLetter('');
    }
  }

  return (
    <div className="page">
       <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              {renderErrorLetters()}
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onInput={handleInput}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;