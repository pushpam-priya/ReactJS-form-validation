import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
// import Signup1 from "./components/Signup1";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Signup/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
