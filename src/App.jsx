import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
