import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Speak the text
        </p>
        {/* add an input box */}
        <input type="text" id="text" />
        
        <button id="speak">Speak</button>
      </header>
    </div>
  );
}

export default App;
