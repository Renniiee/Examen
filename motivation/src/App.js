import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;

$(document).ready(function(){
  const { getQuote, getRandomQuote } = require('/Users/reneebakhuizen/Desktop/Examen/HTML/motivation/lib/index.js'),
  quote = getQuote();
  console.log(getQuote({ author: false }));
});
