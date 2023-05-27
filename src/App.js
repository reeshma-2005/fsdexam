import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Otpsend from "./components/Otpsend";
import Emailotpsave from "./components/Emailotpsave";
function App() {
  return (
    
    <BrowserRouter>
    <Routes>

       <Route path="/" element={<Otpsend/>}/>
       <Route path="/otp" element={<Emailotpsave/>}/>
       
    </Routes>
    </BrowserRouter>
    
      
    
  );
}

export default App;
