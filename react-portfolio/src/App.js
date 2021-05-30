import Header from './components/Header/HeaderNav';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import "./App.css";
import 'bulma/css/bulma.min.css';

// import './components/Search.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <Header />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
