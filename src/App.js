import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Home/Header/Header';
import HomePage from './Components/Home/HomePage/HomePage';
import ProductFeatures from './Components/Home/Food/ProductFeatures';
import ProductFeaturesDetails from './Components/Home/Food/ProductFeaturesDetails';
import Footer from './Components/Home/Footer/Footer';
import UploadFile from './Components/UploadFiles/UploadFile';
import AddServices from './Components/Services/AddServices/AddServices';
import Vegetables from './Components/Home/Food/Vegetables/Vegetables';
import Contact from './Components/Contact/Contact';
import FreshFruits from './Components/Home/Food/FreshFruits/FreshFruits';
import VegetableDetails from './Components/Home/Food/Vegetables/VegetableDetails';

function App() {
  return (
    <div>
     <Router>
     <Header/>
       <Switch>
         <Route exact path="/">
          <HomePage/>
          <ProductFeatures/>
          <Footer/>
         </Route>
          <Route path="/fruits/:productFeatureId">
              <ProductFeaturesDetails/>
         </Route>
         <Route path="/file">
            <UploadFile/>
         </Route>
         {/* <Route path="/addService">
            <AddServices/>
         </Route> */}
         <Route path="/vegetable">
           <Vegetables/>
         </Route>
         <Route path="/fruit">
          <FreshFruits/>
         </Route>
         <Route path="/contact">
            <Contact/>
         </Route>
         <Route path="/vegetableDetails/:vegetableId">
           <VegetableDetails/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
