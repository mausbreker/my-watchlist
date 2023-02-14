import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Playground from './playground/Playground';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Landing />
      </main>
      <hr />
      <Footer />

      {/* [START] - playground */}
      
      {/* <Playground /> */}

      {/* [END] - playground */}
    </div>
  );
}

export default App;
