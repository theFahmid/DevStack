import heroImg from "../assets/banner-stack.png";
export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-325 w-[90%] py-15 gap-16 md:gap-32">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="font-black text-4xl md:text-left text-center">
          Build Your Ideal <br />
          <span className="brand-gradient bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-slate-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4 lg:flex-row flex-col">
            <button className="px-4 py-2 text-white font-medium brand-gradient rounded-lg">Explore Technologies</button>
            <button className="px-4 py-2 border font-medium border-slate-300 rounded-lg">Learn More</button>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 items-center">
        <img src={heroImg} alt="Hero Image" className="w-full"/>
      </div>
    </div>
  );
}
