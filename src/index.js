import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./components/home";
import Reports from "./components/reports";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App/>);
