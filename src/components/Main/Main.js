import { Routes, Route } from "react-router-dom";

import CreateProduct from "../CreateProduct/CreateProduct";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import Home from "../Home/Home";
import Logout from "../Logout/Logout";
import "./Main.css";

export default function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </main>
  );
}
