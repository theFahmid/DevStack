import NavLogo from "../assets/logo-text.png";
import Hamburger from "../assets/hamburger.png";
export default function Navbar() {
  return (
    <div className="sticky top-0 border-b-slate-300 border-b bg-white z-100">
      <nav className="grid items-center grid-cols-3 md:flex md:justify-between md:items-center w-[90%] mx-auto max-w-325 py-4">
        <img src={Hamburger} alt="Menu" className="block md:hidden cursor-pointer" />
        <img src={NavLogo} alt="DevStack Logo" />
        <ul className="hidden md:flex items-center justify-between gap-8">
          <li>
            <a href="#" className="font-bold text-orange-700">
              Home
            </a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex items-center gap-2 text-xs font-medium">
          <button className="px-4 py-2 text-nowrap rounded-full">
            Sign In
          </button>
          <button className="brand-gradient px-4 py-2 text-white text-nowrap rounded-full">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
}
