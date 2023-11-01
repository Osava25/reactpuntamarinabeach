import './App.css';
import Menu from './components/Menu.js';
import ContentHeader from './components/ContentHeader';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <ContentHeader
          description="La vida que sueñas"
          description2="frente al "
          description3="Mar Caribe"
        />
      </header>
    </div>
  );
}

export default App;
