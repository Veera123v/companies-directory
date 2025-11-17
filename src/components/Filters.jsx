export default function Filters({
  search, setSearch,
  industry, setIndustry,
  location, setLocation,
  sortBy, setSortBy,
  industries,
  locations
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-4 sticky top-16 z-10">

      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      >
        <option value="All">All Industries</option>
        {industries.map((i) => (
          <option key={i}>{i}</option>
        ))}
      </select>

      <select
        className="border p-2 rounded"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="All">All Locations</option>
        {locations.map((l) => (
          <option key={l}>{l}</option>
        ))}
      </select>

      <select
        className="border p-2 rounded"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="nameAsc">Name (A → Z)</option>
        <option value="nameDesc">Name (Z → A)</option>
        <option value="empHigh">Employees (High → Low)</option>
        <option value="empLow">Employees (Low → High)</option>
      </select>

    </div>
  );
}
