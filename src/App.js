import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Home/Header/Header';
import Navbar from './Components/Home/Header/Navbar/Navbar';
import HomePage from './Components/Home/HomePage/HomePage';

function App() {
  return (
    <div>
     <Router>
     <Header/>
       <Switch>
         <Route exact path="/">
          <HomePage></HomePage>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
