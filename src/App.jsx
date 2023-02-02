import logo from './logo.svg';
import './App.css';
import UserImage from './playground/UserImage';
import ClassSample from './playground/ClassSample';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Person from './playground/Person';
import Movie from './playground/Movie';
import batman from './playground/img/batman.jpg'
import superman from './playground/img/superman.jpg'
import spiderman from './playground/img/spiderman.jpg'

function App() {
  return (
    <div className="App">
      {/* <Header />
      <hr />
      <Main />
      <hr />
      <Footer /> */}

      {/* [START] - playground */}
      
      <Person 
        name="Frane" 
        surname="Bilić" 
        birthday="16.04.1989" 
        address="Špičkovina 2"
        parties={["HNS", "HSLS", "HSS"]}
      />
      
      <Person 
        name="Stipe" 
        surname="Mesić" 
        birthday="23.12.1947" 
        address="Pantovčak 67"
        parties={["HDZ", "SDP", "Možemo"]}
      />

      <Movie 
        title="Batman"
        image={batman}
      />

      <Movie 
        title="Superman"
        image={superman}
      />

      <Movie 
        title="Spiderman"
        image={spiderman}
      />

      {/* <UserImage />
      <ClassSample /> */}
      {/* [END] - playground */}
    </div>
  );
}

export default App;
