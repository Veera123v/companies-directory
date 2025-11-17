import { Routes, Route } from "react-router-dom";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CompaniesPage />} />
      <Route path="/company/:id" element={<CompanyDetailsPage />} />
    </Routes>
  );
}
