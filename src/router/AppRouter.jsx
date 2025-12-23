import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import DesignSystem from "../pages/DesignSystem";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
