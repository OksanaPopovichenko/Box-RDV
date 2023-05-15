import { useReducerAtom } from "jotai/utils";
import client from "../states/client";
import { Client } from "../types/client";

// Define action types
interface UpdateClientAction {
  type: "UPDATE_CLIENT_INFO";
  payload: Client;
}

// Create a union type of all available action types
type Action = UpdateClientAction;

// Define reducer function
export const reducer = (state: Client, action: Action) => {
  switch (action.type) {
    case "UPDATE_CLIENT_INFO": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

// Define a custom hook
export function useClient() {
  const [state, dispatch] = useReducerAtom(client, reducer);

  // Define function to update the data of a client
  function updateClientInfo(info: Client) {
    dispatch({ type: "UPDATE_CLIENT_INFO", payload: { ...info } });
  }

  return { client: state, updateClientInfo };
}
