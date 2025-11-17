import { useParams, Link } from "react-router-dom";
import data from "../../public/mock-companies.json";

export default function CompanyDetailsPage() {
  const { id } = useParams();
  const company = data.find((c) => c.id === Number(id));

  if (!company) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600 text-xl">Company not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">

      {/* Back */}
      <div className="p-4 bg-white shadow-md sticky top-0 z-50">
        <Link to="/" className="text-blue-600 text-lg font-medium hover:underline">
          ← Back to Companies
        </Link>
      </div>

      {/* HERO */}
      <div className="bg-blue-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-6">

          {/* Company Logo */}
          {company.logo ? (
            <img
              src={company.logo}
              className="w-24 h-24 bg-white rounded-full shadow-md p-2"
              alt={company.name}
            />
          ) : (
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl text-blue-700 font-bold">
              {company.name.charAt(0)}
            </div>
          )}

          <div>
            <h1 className="text-4xl font-bold">{company.name}</h1>

            <div className="flex flex-wrap gap-3 mt-3">
              <span className="bg-white text-blue-700 px-3 py-1 rounded-full font-medium">
                {company.industry}
              </span>
              <span className="bg-white text-blue-700 px-3 py-1 rounded-full font-medium">
                📍 {company.location}
              </span>
              <span className="bg-white text-blue-700 px-3 py-1 rounded-full font-medium">
                👥 {company.employees} Employees
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto p-8 mt-6 bg-white shadow-lg rounded-xl">

        <h2 className="text-2xl font-semibold mb-3">About the Company</h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          {company.description}
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Company Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
            <div className="p-4 border rounded-xl bg-gray-50">
              <strong>Industry:</strong> {company.industry}
            </div>
            <div className="p-4 border rounded-xl bg-gray-50">
              <strong>Location:</strong> {company.location}
            </div>
            <div className="p-4 border rounded-xl bg-gray-50">
              <strong>Employees:</strong> {company.employees}
            </div>
            <div className="p-4 border rounded-xl bg-gray-50">
              <strong>Founded:</strong> {company.founded}
            </div>
            <div className="p-4 border rounded-xl bg-gray-50">
              <strong>CEO:</strong> {company.ceo}
            </div>
          </div>
        </div>

        {/* Website Button */}
        <div className="mt-10">
          <a
            href={company.website}
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 shadow-lg"
          >
            🌐 Visit Website
          </a>
        </div>

      </div>
    </div>
  );
}
