import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import {Route, Routes} from "react-router-dom";
import Landing from "./Landing";
import React from "react";
import Project from "./Project";

function App() {
  return (
      <div className="container px-0 mx-0">
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/Labs/*" element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/Project/*" element={<Project/>}/>
        </Routes>
      </div>
  );
}

export default App;
