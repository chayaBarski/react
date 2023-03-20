import AddDepartment from './AddDepartment';
import Pro from './Product';
import List from './List';
import axios from "axios";
import { useState,useEffect } from "react";
import { getAllDeparment, saveOneDeparment, deletOneDeparment, editOneDeparment } from '../service/deparment';
import { getAllProducts, saveOneProduct, deletOneProduct, editOneProducr } from '../service/Producrs';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { StatisticGroup } from 'semantic-ui-react';
function Home() {
return (

  <div className="App">
    <h1>hello</h1>
    <BrowserRouter>
      <nav>
        {/* <Link to="/">Home Page </Link> */}
        <Link to="/AddDepartment">Add Department </Link>
        <Link to="/Product">Product </Link>
        <Link to="/List">List </Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/AddDepartment" element={<AddDepartment />} />
        <Route path="/Product" element={<Pro/>} />
        <Route path="/List" element={<List />} />
        {/* <Route exact path="/List/*" component={<AddDepartment edit={true} id={Deparment.id} name={Deparment.name} description={Deparment.description}></AddDepartment>}></Route> */}
      </Routes>
    </BrowserRouter>


  </div>
);
}


export default Home;
