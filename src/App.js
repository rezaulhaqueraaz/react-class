import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.<ButtonOne/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React<ButtonOne/>
        </a>
      </header>
    </div>
  );
}


function ButtonOne() {
  return (
    <div>
        <div style={{backgroundColor:'blue',color:'#fff'}}>Click Me</div>
    </div>
  );
}


export default App;
