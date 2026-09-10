import { Suspense, use, useState } from "react";
import StackHeader from "./stackHeader";
import type { StackDataType } from "../type";
import { StackDataPromise } from "./fetchData";
import Stack from "./stack";
import SelectedStack from "./selectedStack";

export default function StackArea() {
  const [selectedStack, setSelectedStack] = useState<StackDataType[]>([]);
  return (
    <div className="mx-auto max-w-325 w-[90%] py-15">
      <StackHeader />
      <div className="grid grid-cols-1 md:grid-cols-[auto_300px] gap-4 my-4">
        <Suspense fallback={<p>Loading...</p>}>
          <Stack
            data={use(StackDataPromise)}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />
        </Suspense>
        <SelectedStack
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack}
        />
      </div>
    </div>
  );
}
