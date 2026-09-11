import logo from "../assets/logo-text.png";
export default function Footer() {
  return (
    <footer>
      <div className="w-[90%] mx-auto max-w-325 grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] py-20">
        <div>
          <img src={logo} alt="DevStack" />
          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2">Product</h2>
          <div className="flex flex-col">
            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2">Company</h2>
          <div className="flex flex-col">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2">Legal</h2>
          <div className="flex flex-col">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto max-w-325">
        <div className="bg-slate-300 mx-4 my-4 h-px"></div>
        <div className="text-sm text-slate-500">
          <div>© 2026 Dev Stack. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
