import './App.scss';
import beers from './assets/punkData';
import Nav from "./Containers/Nav/Nav"
import Main from "./Containers/Main/Main"

function App() {



  return (
    <div className="App">
     <Nav/>
     <Main beers={beers}/>
    
    </div>
  );
}

export default App;
