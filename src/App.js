import logo from './logo.svg';
import './App.css';
import {Navbar} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="App-Navbar" bg="danger">
          <Navbar.Brand className= "text-white">React Chart js Integration</Navbar.Brand>
        </Navbar>
        <HomeScreen/>
       
        
      </header>
    </div>
  );
}


export default App;
