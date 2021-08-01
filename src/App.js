import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Home/Header/Header';
import HomePage from './Components/Home/HomePage/HomePage';
import Meals from './Components/Home/HomePage/Meals/Meals';
import ProductFeatures from './Components/Home/Food/ProductFeatures';
import ProductFeaturesDetails from './Components/Home/Food/ProductFeaturesDetails';
import Footer from './Components/Home/Footer/Footer';

function App() {
  return (
    <div>
     <Router>
     <Header/>
       <Switch>
         <Route exact path="/">
          <HomePage/>
          <Meals/>
          <ProductFeatures/>
          <Footer/>
         </Route>
          <Route path="/fruits/:productFeatureId">
              <ProductFeaturesDetails/>
         </Route>

       </Switch>
     </Router>
    </div>
  );
}

export default App;
