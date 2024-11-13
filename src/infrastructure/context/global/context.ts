import { createContext } from "react";
import { ForContext } from "../../domain/schema/types";

export const GlobalContext = createContext<ForContext>({} as never)