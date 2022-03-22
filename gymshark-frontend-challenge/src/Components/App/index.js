import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home";
import Exercise from "../../Pages/Exercise";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </div>
  );
}

export default App;
