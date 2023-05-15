import { atom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import { Client } from "../types/client";

export const initialState = {
  id: uuidv4(),
  name: "",
  phone: "",
  email: "",
  gender: "homme",
  toggleRappel: true,
  toggleMarketing: false,
};

const client = atom<Client>(initialState);

export default client;
