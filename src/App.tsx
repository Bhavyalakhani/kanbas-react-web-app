import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Labs from "./Labs";
import Lab2 from "./Labs/Lab2";
import Kanbas from "./Kanbas";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
