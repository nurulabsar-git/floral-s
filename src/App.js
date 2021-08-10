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
         <Route path="/addService">
            <AddServices/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
