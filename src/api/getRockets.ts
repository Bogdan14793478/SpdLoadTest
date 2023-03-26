import { gql } from "@apollo/client";
import { RocketsType } from "../state/card";

export type RocketsResponseType = {
  rockets: RocketsType[];
};
export const GetRockets = gql`
  query getRockets {
    rockets {
      name
      id
      description
    }
  }
`;
