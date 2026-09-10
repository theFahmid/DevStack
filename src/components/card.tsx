import { Flip, toast } from "react-toastify";
import type { StackDataItemProp } from "../type";

function addToStack({
  data,
  selectedStack,
  setSelectedStack,
}: StackDataItemProp) {
  const newSelectedStack = [...selectedStack, data];
  setSelectedStack(newSelectedStack);
  toast.success(`${data.name} has been added to your stack`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Flip,
  });
}
export function Card({
  data,
  selectedStack,
  setSelectedStack,
}: StackDataItemProp) {
  return (
    <div className={`${selectedStack.includes(data) ? "border-pink-500 shadow-md" :"border-slate-200"} border rounded-xl p-4 flex flex-col gap-4 justify-between`}>
      <div className="flex justify-between items-start">
        <img src={data.icon} alt={data.name} className="h-8 w-auto" />
        <p className="text-green-500 bg-green-100 rounded-full px-3 py-1 text-xs font-bold">
          {data.badge}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold">{data.name}</h3>
        <p className="text-slate-400 text-sm">{data.description}</p>
      </div>
      <div className="grid grid-cols-[auto_1fr_auto] place-items-center justify-between text-xs">
        <div className="bg-slate-200 px-2 py-1 rounded-full text-slate-500">
          {data.category}
        </div>
        <div className="text-slate-400">{data.difficulty}</div>
        <div>⭐{data.rating}</div>
      </div>
      <button
        disabled={selectedStack.includes(data)}
        className="bg-slate-900 text-white font-bold w-full py-2 rounded-xl disabled:bg-slate-400 disabled:cursor-not-allowed"
        onClick={() => addToStack({ data, selectedStack, setSelectedStack })}
      >
        {selectedStack.includes(data) ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
