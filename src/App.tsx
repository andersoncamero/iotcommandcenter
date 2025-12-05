import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import { HomePage } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Controller } from "./pages/Controller";
import { AddController } from "./pages/AddController";
import { DevicesPages } from "./pages/Devices";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/controllers" element={<Controller />} />
          <Route path="/add-controller" element={<AddController />} />
          <Route path="/devices" element={<DevicesPages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
