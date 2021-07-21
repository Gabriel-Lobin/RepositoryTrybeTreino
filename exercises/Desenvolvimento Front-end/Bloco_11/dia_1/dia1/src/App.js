import logo from './logo.svg';
import './App.css';

const comp = () => {
  const compromissos = ['Lavar pratos', 'Fazer compras', 'Limpar casa' ];
  return compromissos.map(comp => <li>{comp}</li>);
}

const Task = (value) => {  
  return (
    <p>{value}</p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {Task('Hello React :D')}
        <ul>
          {comp()}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
