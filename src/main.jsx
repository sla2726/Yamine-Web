import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import App from "./pages/App.jsx";
import TermService from "./pages/TermService.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="termService" element={<TermService />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />

      </Route>
    </Routes>
  </HashRouter>
);
