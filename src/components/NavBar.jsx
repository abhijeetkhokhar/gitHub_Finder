import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-5 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
      {/* Logo / Brand Name */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          MyApp
        </Link>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links (Desktop View) */}
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md py-3">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}

// Navbar Links Component
const NavLinks = ({ onClick }) => (
  <>
    <Link
      to="/"
      className="mx-6 text-gray-700 hover:text-blue-500"
      onClick={onClick}
    >
      Home
    </Link>
    <Link
      to="/about"
      className="mx-6 text-gray-700 hover:text-blue-500"
      onClick={onClick}
    >
      About
    </Link>
    <Link
      to="/contact"
      className="mx-6 text-gray-700 hover:text-blue-500"
      onClick={onClick}
    >
      Contact
    </Link>
    <Link
      to="/github-users"
      className="mx-6 text-gray-700 hover:text-blue-500"
      onClick={onClick}
    >
      GitHub Users
    </Link>
  </>
);

export default Navbar;
