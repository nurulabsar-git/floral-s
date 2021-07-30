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

function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route>
          <Navbar></Navbar>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
