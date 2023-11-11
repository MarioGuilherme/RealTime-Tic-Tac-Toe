import { createContext, useCallback, useState, useMemo, useRef } from "react";

import playerX from "../assets/x.svg";
import playerZero from "../assets/zero.svg";

let data = ["", "", "", "", "", "", "", "", ""];

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  let [count, setCount] = useState(0);
  let square1 = useRef(null);
  let square2 = useRef(null);
  let square3 = useRef(null);
  let square4 = useRef(null);
  let square5 = useRef(null);
  let square6 = useRef(null);
  let square7 = useRef(null);
  let square8 = useRef(null);
  let square9 = useRef(null);
  let squaresRef = [square1, square2, square3, square4, square5, square6, square7, square8, square9]

  const [squares, setSquares] = useState(Array(9).fill(false));
  const [lock, setLock] = useState(false);
  const [markX, setMarkX] = useState({
    src: playerX,
    alt: "Player chosen mark",
  });
  const [markZero, setMarkZero] = useState({
    src: playerZero,
    alt: "Player chosen mark",
  });

  const handleClick = useCallback(
    (e, num) => {
      if (lock) return 0;

      if (count % 2 === 0) {
        e.target.innerHTML = `<img src=${markX.src} alt=${markX.alt} width={110} />`;
        data[num] = "x";
        setCount(++count);
      } else {
        e.target.innerHTML = `<img src=${markZero.src} alt=${markZero.alt} width={110} />`;
        data[num] = "o";
        setCount(++count);
      }

      checkWin();
      checkDraw();
    },
    [count, lock, markX.src, markX.alt, markZero.src, markZero.alt]
  );

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      console.log("X won!");
      reset()
    } else {
      console.log("O won!");
      reset()
    } 
  };

  const checkDraw = () => {
    if (data.every((value) => value !== "")) {
      reset();
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];

    setTimeout(() => {
      squaresRef.forEach((square) => {
        square.current.innerHTML = "";
      });
    }, 5000)
  };

  const value = useMemo(() => {
    return { squares, squaresRef, handleClick };
  }, [squares, squaresRef, handleClick]);

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export default BoardContext;

//performance optimization: https://www.linkedin.com/posts/edirodriguez_many-apps-using-react-context-have-huge-performance-activity-7125013577727393792-bI90?utm_source=share&utm_medium=member_desktop
