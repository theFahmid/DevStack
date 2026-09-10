export interface StackDataType {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export interface StackProp {
  selectedStack: StackDataType[];
  setSelectedStack: React.Dispatch<React.SetStateAction<StackDataType[]>>;
}

export interface StackDataProp extends StackProp {
  data: StackDataType[];
}

export interface StackDataItemProp {
  data: StackDataType;
  selectedStack: StackDataType[];
  setSelectedStack: React.Dispatch<React.SetStateAction<StackDataType[]>>;
}