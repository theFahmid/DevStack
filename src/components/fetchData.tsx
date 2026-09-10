import type { StackDataType } from "../type";

async function fetchStackData(): Promise<StackDataType[]> {
  const data = await fetch("/data.json");
  return data.json();
}

export const StackDataPromise = fetchStackData();