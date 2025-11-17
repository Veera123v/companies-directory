import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between shadow-md sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold">
        Companies Directory
      </Link>
    </nav>
  );
}
