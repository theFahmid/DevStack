import { Suspense, use, useState } from "react";
import type { StackDataType } from "../type";

async function TechPromise(): Promise<StackDataType[]> {
  const data = await fetch("/data.json");
  const promise = data.json();
  return promise;
}

function handleSelected(
  id: string,
  selectedTech: string[],
  setSelectedTech: React.Dispatch<React.SetStateAction<any[]>>,
) {
  if (selectedTech.includes(id)) {
    const newSelectedTech = selectedTech.filter((item) => item !== id);
    console.log(newSelectedTech);
    setSelectedTech(newSelectedTech);
  } else {
    const newSelectedTech = [...selectedTech, id];
    setSelectedTech(newSelectedTech);
  }
}

function StackCard({
  card,
  selectedTech,
  setSelectedTech,
}: {
  card: StackDataType;
  selectedTech: string[];
  setSelectedTech: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  return (
    <div className="border border-slate-200 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <img src={card.icon} alt={card.name} className="h-8 w-auto" />
        <p className="text-green-500 bg-green-100 rounded-full px-3 py-1 text-xs font-bold">
          {card.badge}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold">{card.name}</h3>
        <p className="text-slate-400 text-sm">{card.description}</p>
      </div>
      <div className="grid grid-cols-[auto_1fr_auto] place-items-center justify-between text-xs">
        <div className="bg-slate-200 px-2 py-1 rounded-full text-slate-500">
          {card.category}
        </div>
        <div className="text-slate-400">{card.difficulty}</div>
        <div>⭐{card.rating}</div>
      </div>
      <button
      disabled={selectedTech.includes(card.id)}
        className="bg-slate-900 text-white font-bold w-full py-2 rounded-xl disabled:bg-slate-400 disabled:cursor-not-allowed"
        onClick={() => handleSelected(card.id, selectedTech, setSelectedTech)}
      >
        {selectedTech.includes(card.id) ? "Remove from Stack": "Add to Stack"}
      </button>
    </div>
  );
}

function Stack({
  data,
  selectedTech,
  setSelectedTech,
}: {
  data: Promise<StackDataType[]>;
  selectedTech: any[];
  setSelectedTech: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const stackData = use(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {stackData.map((item) => (
        <StackCard
          key={item.id}
          card={item}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      ))}
    </div>
  );
}

function getStackData() {
  return TechPromise();
}

function SelectedStackCard({ tech }) {
  return (
    <div className="border border-slate-200 p-4 rounded-xl">
      <p>{tech}</p>
      <button>Remove</button>
    </div>
  );
}

function EmptyStack() {
    return (<div className="border border-slate-300 py-4 px-2 text-center">
        Your stack is empty
    </div>)
}
function SelectedStack({
  selectedTech,
  setSelectedTech,
}: {
  selectedTech: any[];
  setSelectedTech: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  return (
    <div className="border rounded-xl p-4 space-y-4 sticky top-20">
      <h4 className="text-2xl font-bold">Your Stack</h4>
      <p className="text-slate-500">{selectedTech.length === 0 ? "No technologies selected yet!" : `${selectedTech.length} Technology Selected`}</p>
      {selectedTech.length === 0 ? (
        <EmptyStack/>
      ) : (
        <>
          {selectedTech.map((tech) => SelectedStackCard((tech = { tech })))}
          <button className="flex justify-center items-center text-center w-full border border-amber-500 text-amber-500 px-4 py-2 rounded-xl font-bold" onClick={()=>setSelectedTech([])}>Remove All</button>
        </>
      )}
    </div>
  );
}

export default function Explore() {
  const [selectedTech, setSelectedTech] = useState([]);
  return (
    <div className="mx-auto max-w-325 w-[90%] py-15">
      <h2 className="font-bold text-3xl">
        Explore the{" "}
        <span className="bg-linear-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-slate-400">
        Pick one technology per category to build your ideal stack
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[auto_300px] gap-4 my-4">
        <Suspense fallback={<p>Loading...</p>}>
          <Stack
            data={getStackData()}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        </Suspense>
        <SelectedStack
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      </div>
    </div>
  );
}
