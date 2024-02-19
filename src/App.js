
import './App.css';
import { BrowserRouter as Router , Switch,Route } from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from './components/Home';
import Detail from './components/Detail';
import Movie from './components/Movie';
import Series from './components/Series';
import Originals from './components/Originals';
import { useState } from "react";



function App() {
  const[trailer,setTrailer]=useState(false);
  
  return (
    <div className="App">
      <Router>
        <Header />
        
       <Switch>
        <Route exact path="/">
          <Login  />
        </Route>
        <Route path="/home">
          <Home trailer={trailer} setTrailer={setTrailer}/>
        </Route>
        <Route path="/detail/:id">
          <Detail trailer={trailer} setTrailer={setTrailer}/>
        </Route>
        <Route  path="/movie">
          <Movie />
        </Route>
        <Route  path="/series">
          <Series />
        </Route>
        <Route  path="/originals">
          <Originals />
        </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
