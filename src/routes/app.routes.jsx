import { Routes, Route } from "react-router-dom";

import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:id" element={<Details />} />
      <Route path="/nova-nota" element={<New />} />
      <Route path="/perfil" element={<Profile />} />
    </Routes>
  );
}
