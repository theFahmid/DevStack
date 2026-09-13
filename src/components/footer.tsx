import logo from "../assets/logo-text.png";
export default function Footer() {
  return (
    <footer className="border-t border-slate-300 bg-slate-100">
      <div className="w-[90%] mx-auto max-w-325 gap-8 grid grid-cols-1 text-center md:text-left md:grid-cols-[2fr_1fr_1fr_1fr] py-20">
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <img src={logo} alt="DevStack" className="h-10 w-auto" />
          <p className="text-slate-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 text-slate-500 text-sm">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2 uppercase">Product</h2>
          <div className="flex flex-col text-slate-500">
            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2 uppercase">Company</h2>
          <div className="flex flex-col text-slate-500">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2 uppercase">Legal</h2>
          <div className="flex flex-col text-slate-500">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto max-w-325">
        <div className="bg-slate-300 h-px"></div>
        <div className="text-sm text-slate-500 flex justify-between items-center py-4">
          <div>© 2026 Dev Stack. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
