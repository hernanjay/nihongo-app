import { createContext, useReducer } from "react";

export const KanaContext = createContext();

let initialKanaState = {
  data: [],
};

const kanaReducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export const KanaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(kanaReducer, initialKanaState);
  return (
    <KanaContext.Provider value={{ ...state, dispatch }}>
      {children}
    </KanaContext.Provider>
  );
};
