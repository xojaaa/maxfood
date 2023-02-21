import React from "react";
import { Route, Routes } from "react-router-dom";
import Navs from "./navs";
import All from "./all";
import Sushi from "./sushi";
import Pitsa from './pitsa';

function App() {
  return (
    <div>
      <Navs />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/pista" element={<Pitsa />} />
            <Route path="/sushi" element={<Sushi />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
