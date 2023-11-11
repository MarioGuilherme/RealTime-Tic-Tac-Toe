import { useContext } from "react";
import BoardContext from "../../context/boardContext";
import * as Style from "./style";

function Board() {
  const { squares, mark, handleSquareClick } = useContext(BoardContext);

  return (
    <Style.Container>
      <Style.Board>
        {Array(9)
          .fill()
          .map((_, index) => (
            <Style.Square key={index} onClick={() => handleSquareClick(index)}>
              {squares[index] && (
                <img src={mark.src} alt={mark.alt} width={110} />
              )}
            </Style.Square>
          ))}
      </Style.Board>
    </Style.Container>
  );
}

export default Board;
