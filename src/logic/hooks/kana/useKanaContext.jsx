import { useContext } from "react";
import { KanaContext } from "../../context/KanaContext";

export const useKananContext = () => {
  const context = useContext(KanaContext);

  if (!context)
    throw Error("useKananContext must be used inside a KananContexttProvider");

  return context;
};
