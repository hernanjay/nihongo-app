import { createContext, useReducer } from "react";

export const KanaContext = createContext();

let initialKanaState = {
  presetKana: [],
};

const kanaReducer = (state, action) => {
  shuffle(action.payload);
  switch (action.type) {
    case "dataReceived":
      initialKanaState.presetKana = action.payload;
      return {
        presetKana: action.payload,
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

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
