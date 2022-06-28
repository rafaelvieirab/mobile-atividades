import React from "react";
import { StateType } from "../redux/redux";

interface ContextType {
  state: StateType;
  dispatch: any;
}

const BookContext = React.createContext<ContextType>({} as ContextType);

export default BookContext;