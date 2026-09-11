import { Flip, toast } from "react-toastify";
import type { StackDataType, StackProp } from "../type";
import { SelectedCard } from "./selectedCard";

function EmptyStack() {
  return (
    <div className="border-dotted border text-xs text-slate-500 border-slate-300 py-4 px-2 text-center rounded-xl ">
      Your stack is empty
    </div>
  );
}

function clearStack(
  setSelectedStack: React.Dispatch<React.SetStateAction<StackDataType[]>>,
) {
  setSelectedStack([]);
  toast.info(`Your Stack has been cleared`, {
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
export default function SelectedStack({
  selectedStack,
  setSelectedStack,
}: StackProp) {
  return (
    <div className="p-4 border border-slate-300 rounded-xl space-y-4 md:sticky md:top-20">
      <div>
        <h3 className="font-bold text-xl">Your Stack</h3>
        <p>
          {selectedStack.length === 0
            ? "No technologies selected yet."
            : `${selectedStack.length} Technology Selected`}
        </p>
      </div>
      {selectedStack.length === 0 ? (
        <EmptyStack />
      ) : (
        <div className="space-y-2">
          {selectedStack.map((item) => (
            <SelectedCard
              data={item}
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
              key={item.id}
            />
          ))}
          <button
            className="border w-full px-4 py-2 border-pink-400 rounded-xl font-bold text-center"
            onClick={() => clearStack(setSelectedStack)}
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}
