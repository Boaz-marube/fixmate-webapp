import { Link } from "react-router-dom";
import { useState } from "react"; 
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Hamburger icon */}
      <div className="md:hidden cursor-pointer mr-4 p-2" onClick={() => setIsOpen(!isOpen)}>
        <span className={`block rounded w-8 h-[3px] bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[3px]' : 'mb-1'}`}></span>
        <span className={`block rounded w-8 h-[3px] bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'mb-1'}`}></span>
        <span className={`block rounded w-8 h-[3px] bg-white transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>

      </div>

      {/* Navigation links (mobile) */}
      <div
        className={`absolute right-0 top-12 w-48 text-center z-50 bg-basecolor shadow-lg rounded-md flex flex-col space-y-2 p-4 md:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <hr/>
        <Link to="/maindishes" onClick={() => setIsOpen(false)}>Our Team</Link>
        <hr/>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link> 
        <hr/>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      {/* Navigation links (desktop) + Buttons */}
        <div className="hidden md:flex items-center justify-between gap-20">
            <div className="flex gap-4">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/maindishes" className="hover:text-gray-400">Our Team</Link>
            <Link to="/services" className="hover:text-gray-400">Services</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </div>
            <div className="md:flex gap-4 hidden">
                <Button>Early Access</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    </nav>
  );
}
