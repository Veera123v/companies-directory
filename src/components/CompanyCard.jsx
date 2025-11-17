import { useNavigate } from "react-router-dom";

export default function CompanyCard({ company }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/company/${company.id}`)}
      className="p-5 bg-white shadow-md rounded-xl cursor-pointer hover:shadow-lg transition"
    >
      <img src={company.logo} className="h-14 w-14 mb-4" />

      <h2 className="text-xl font-semibold">{company.name}</h2>
      <p className="text-gray-600">{company.industry}</p>
      <p className="text-gray-500 mt-2">📍 {company.location}</p>
      <p className="text-gray-500">👥 {company.employees} employees</p>
    </div>
  );
}
