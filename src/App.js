import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyProfile from "./MyProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to the App</h1>} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
