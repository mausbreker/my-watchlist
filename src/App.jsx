import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Playground from './playground/Playground';
import Landing from './components/Landing';
import Search from './components/Search';
import Favorites from './components/Favorites';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <hr />
        <Footer />

        {/* [START] - playground */}
        
        {/* <Playground /> */}

        {/* [END] - playground */}
      </div>
    </Router>
  );
}

export default App;
