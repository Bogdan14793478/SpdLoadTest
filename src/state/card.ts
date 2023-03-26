import { atom } from "recoil";

export type RocketsType = {
  description: string;
  id: string;
  name: string;
};

export const rocketsState = atom<RocketsType[] | []>({
  key: "rocketsState",
  default: [],
});
