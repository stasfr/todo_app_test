export interface Todo {
  id: string;
  title: string;
  text: string;
  startDate: number;
  endDate: number;
  isDone: boolean;
  label: "basic" | "important";
}
