import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Playground from './playground/Playground';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Main />
      <hr />
      <Footer />

      {/* [START] - playground */}
      
      {/* <Playground /> */}

      {/* [END] - playground */}
    </div>
  );
}

export default App;
