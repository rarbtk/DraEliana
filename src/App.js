import Footer from "./components/Footer";
import Header from "./components/Header";
import Principal from "./components/Principal"
import Tratamiento  from "./components/Tratamiento";
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path="/" element={
    <div>
    <Principal/>
    <Tratamiento/>
    </div>
    }/>

    </Routes>


    <Footer/> 


    </BrowserRouter>
    
  );
}

export default App;
