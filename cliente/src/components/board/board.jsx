import { useContext } from "react";
import BoardContext from "../../context/boardContext";
import * as Style from "./style";

function Board() {
  const { squaresRef, handleClick } = useContext(BoardContext);

  return (
    <Style.Container>
      <Style.Board>
        {Array(9)
          .fill()
          .map((_, index) => (
            <Style.Square key={index} onClick={(e) => handleClick(e, index)} ref={squaresRef[index]}>
              
            </Style.Square>
          ))}
      </Style.Board>
    </Style.Container>
  );
}

export default Board;
