import { useContext } from "react";
import BoardContext from "../../context/boardContext";
import * as Style from "./style";
import playerX from "../../assets/x.svg";
import playerZero from "../../assets/zero.svg";

function Turn() {
  const { markX, markZero, round, nextPlayer } = useContext(BoardContext);

  return (
    <Style.Container>
      <Style.SubContainer>
        <Style.Holder>
          <p>Sua vez!!</p>
          <Style.ContainerItem>
            <span>Voce joga</span>
            <img src={nextPlayer.src} alt="" width={40} />
          </Style.ContainerItem>
        </Style.Holder>

        <Style.Holder>
          <p>Pontuação</p>
          <Style.ContainerItem>
            <span>
              <img src={playerX} alt="" width={40} />
              <span>{markX.score}</span>
            </span>

            <span>|</span>

            <span>
            <span>{markZero.score}</span>
              <img src={playerZero} alt="" width={40} />
            </span>
          </Style.ContainerItem>
        </Style.Holder>
      </Style.SubContainer>

      <Style.SubContainer>
        <Style.Holder>
          <p>Rodada</p>
          <Style.ContainerItem>
            <span>{round}</span> / <span>3</span>
          </Style.ContainerItem>
        </Style.Holder>
      </Style.SubContainer>
    </Style.Container>
  );
}

export default Turn;
