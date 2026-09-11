import type { StackDataItemProp } from "../type";
import cross from "../assets/cross.svg";
import { Flip, toast } from "react-toastify";

function removeFromStack({
  data,
  selectedStack,
  setSelectedStack,
}: StackDataItemProp) {
  const newSelectedStack = selectedStack.filter((item) => item.id !== data.id);
  setSelectedStack(newSelectedStack);
  toast.info(`${data.name} removed from your stack`, {
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
export function SelectedCard({
  data,
  selectedStack,
  setSelectedStack,
}: StackDataItemProp) {
  return (
    <div className="border border-slate-200 p-4 rounded-xl grid grid-cols-[auto_1fr_auto] gap-4">
      <img src={data.icon} alt={data.name} className="h-10 w-auto" />
      <div>
        <p className="font-bold text-sm">{data.name}</p>
        <p className="text-slate-500 text-xs">{data.category}</p>
      </div>
      <button
        onClick={() =>
          removeFromStack({ data, selectedStack, setSelectedStack })
        }
      >
        <img src={cross} alt="Remove" />
      </button>
    </div>
  );
}
