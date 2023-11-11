import { createContext, useState } from "react";

import playerX from "../assets/x.svg";
import playerZero from "../assets/zero.svg";

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [mark, setMark] = useState({
    src: playerX,
    alt: "Player chosen mark",
  });
  const [squares, setSquares] = useState(Array(9).fill(false));

  const handleSquareClick = (index) => {
    const updatedSquareClicked = [...squares];
    updatedSquareClicked[index] = true;
    setSquares(updatedSquareClicked);
  };

  return (
    <BoardContext.Provider value={{ squares, mark, handleSquareClick }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
