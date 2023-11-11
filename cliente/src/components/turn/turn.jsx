import * as Style from "./style";
import playerX from "../../assets/x.svg";
import playerZero from "../../assets/zero.svg";

function Turn() {
  return (
    <Style.Container>
      <Style.SubContainer>
        <Style.Holder>
          <p>Sua vez!!</p>
          <Style.ContainerItem>
            <span>Jogue</span>
            <img src={playerX} alt="" width={40} />
          </Style.ContainerItem>
        </Style.Holder>

        <Style.Holder>
          <p>Pontuação</p>
          <Style.ContainerItem>
            <span>
              <img src={playerX} alt="" width={40} />
              <span>1</span>
            </span>

            <span>|</span>

            <span>
              <span>0</span>
              <img src={playerZero} alt="" width={40} />
            </span>
          </Style.ContainerItem>
        </Style.Holder>
      </Style.SubContainer>

      <Style.SubContainer>
        <Style.Holder>
          <p>Rodada</p>
          <Style.ContainerItem>
            <span>2</span> / <span>3</span>
          </Style.ContainerItem>
        </Style.Holder>
      </Style.SubContainer>
    </Style.Container>
  );
}

export default Turn;
