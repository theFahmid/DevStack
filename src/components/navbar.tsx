import NavLogo from "../assets/logo-text.png";
export default function Navbar() {
  return (
    <div className="sticky top-0 border-b-slate-300 border-b bg-white z-100">
      <nav className="flex justify-between items-center w-[90%] mx-auto max-w-325 py-4">
        <img src={NavLogo} alt="DevStack Logo" />
        <ul className="flex items-center justify-between gap-8">
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
        <div>
          <button>Sign In</button>
          <button>Sign up</button>
        </div>
      </nav>
    </div>
  );
}
