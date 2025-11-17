import CompanyCard from "../Components/CompanyCard";
import Filters from "../Components/Filters";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Pagination from "../Components/Pagination";
import { useCompanies } from "../hooks/useCompanies";


export default function CompaniesPage() {
  const {
    companies,
    search, setSearch,
    industry, setIndustry,
    location, setLocation,
    sortBy, setSortBy,
    page, setPage,
    totalPages,
    currentItems,
    loading, error
  } = useCompanies();

  const industries = ["All", ...new Set(companies.map(c => c.industry))];
  const locations = ["All", ...new Set(companies.map(c => c.location))];

  return (
    <>
      <Navbar/>

      <div className="p-6 max-w-6xl mx-auto min-h-screen">

        {loading && <p className="text-center text-xl mt-10">⏳ Loading companies...</p>}

        {error && <p className="text-center text-red-600 text-xl mt-10">❌ {error}</p>}

        {!loading && !error && (
          <>
            <Filters
              search={search}
              setSearch={setSearch}
              industry={industry}
              setIndustry={setIndustry}
              location={location}
              setLocation={setLocation}
              sortBy={sortBy}
              setSortBy={setSortBy}
              industries={industries}
              locations={locations}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {currentItems.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>

            <Pagination
              page={page} 
              setPage={setPage} 
              totalPages={totalPages}
            />
          </>
        )}
      </div>

    <Footer/>
    </>
  );
}
