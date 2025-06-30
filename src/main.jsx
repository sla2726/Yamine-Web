import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import TermService from "./pages/TermService.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Commands from "./pages/Commands.jsx";
import Premium from "./pages/Premium.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="termService" element={<TermService />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="commands" element={<Commands />} />
        <Route path="premium" element={<Premium />} />
      </Route>
    </Routes>
  </HashRouter>,
);
