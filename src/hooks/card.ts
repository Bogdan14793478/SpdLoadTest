import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { GetRockets, RocketsResponseType } from "../api/getRockets";
import { rocketsState, RocketsType } from "../state/card";

export const useRockets = () => {
  const { data } = useQuery<RocketsResponseType>(GetRockets);
  return data?.rockets;
};

export const useAddRocketToFavorite = () => {
  const [state, setState] = useRecoilState(rocketsState);

  const addItem = (item: RocketsType) => {
    const newArr = [...state];
    newArr.push(item);
    const uniq = new Set(newArr);
    const array = Array.from(uniq);
    setState(array);
  };

  const removeItem = (item: string) => {
    const newArr = state.filter((el) => el.id !== item);
    setState(newArr);
  };

  const removeAll = () => {
    setState([]);
  };
  return { addItem, removeItem, removeAll };
};
