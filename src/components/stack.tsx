import type { StackDataProp } from "../type";
import { Card } from "./card";

export default function Stack({
  data,
  selectedStack,
  setSelectedStack,
}: StackDataProp) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <Card
          key={item.id}
          data={item}
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack}
        ></Card>
      ))}
    </div>
  );
}
