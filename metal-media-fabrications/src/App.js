import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from'./content/Home';
import Fabrications from './content/Fabrications';
import Art from './content/Art';
import Contact from './content/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return(
    <Router>
    <div className="App">

    <Route exact path="/">
    <Home />
    </Route>
    
    <Route exact path="/Fabrications">
    <Fabrications />
    </Route>

    <Route exact path="/Art">
    <Art />
    </Route>

    <Route exact path="/Contact">
    <Contact/>
    </Route>

    </div>
    </Router>
  );
}


export default App;
