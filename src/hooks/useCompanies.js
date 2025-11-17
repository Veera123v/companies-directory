import { useEffect, useState } from "react";

export function useCompanies() {
  const [companies, setCompanies] = useState([]);

  const [rawSearch, setRawSearch] = useState("");
  const [search, setSearch] = useState("");

  const [industry, setIndustry] = useState("All");
  const [location, setLocation] = useState("All");
  const [sortBy, setSortBy] = useState("nameAsc");

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setSearch(rawSearch), 300);
    return () => clearTimeout(timer);
  }, [rawSearch]);

  useEffect(() => {
    fetch("/mock-companies.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data.");
        setLoading(false);
      });
  }, []);

  let filtered = companies.filter((c) => {
    const s = search.toLowerCase();
    return (
      (c.name.toLowerCase().includes(s) ||
        c.description.toLowerCase().includes(s)) &&
      (industry === "All" || c.industry === industry) &&
      (location === "All" || c.location === location)
    );
  });

  if (sortBy === "nameAsc") filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "nameDesc") filtered.sort((a, b) => b.name.localeCompare(a.name));
  if (sortBy === "empHigh") filtered.sort((a, b) => b.employees - a.employees);
  if (sortBy === "empLow") filtered.sort((a, b) => a.employees - b.employees);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const currentItems = filtered.slice(start, start + itemsPerPage);

  return {
    companies,
    search, setSearch: setRawSearch,
    industry, setIndustry,
    location, setLocation,
    sortBy, setSortBy,
    page, setPage,
    totalPages,
    currentItems,
    loading,
    error
  };
}
