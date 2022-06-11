import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

const Task = (values) => {
  return (
    values.map((value) => <li>{value}</li>)
  );
}

const compromissos = ['estudar', 'ficar com minha filha', 'ficar com a Gabriella', 'planejar dia dos namorados'];

function App() {
  return (
    <div className="App">
      <Header />
        <h1 className='title'>Compromissos</h1>
        { Task(compromissos.map((compromisso) => compromisso)) }
      <Content />
      <Footer />
    </div>
  );
}

export default App;
