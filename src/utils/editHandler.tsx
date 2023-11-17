import { ITrendingItems } from "../components/Trending/Trending";

export const editHandler = (item: ITrendingItems, i: number, arr: ITrendingItems[]) => {
  const result = [...arr];
  result.splice(i, 1);
  result.unshift(item);
  sessionStorage.setItem("newData", JSON.stringify(result));
  return result;
};
