import React from "react";
import { Route, Routes } from "react-router-dom";
import Navs from "./navs";
import All from "./all";
import Burger from "./burger";
import Konbo from "./konbo";
import Lavash from "./lavash";
import NonKabob from "./nonkabob";
import Sushi from "./sushi";

function App() {
  return (
    <div>
      <Navs />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/burger" element={<Burger />} />
            <Route path="/konbo" element={<Konbo />} />
            <Route path="/lavash" element={<Lavash />} />
            <Route path="/non-kabob" element={<NonKabob />} />
            <Route path="/sushi" element={<Sushi />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
