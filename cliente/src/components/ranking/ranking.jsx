import * as Style from "./style";
import playerX from "../../assets/x.svg";
import { FaUser, FaTrophy } from "react-icons/fa";
const players = {
  0: "Marcos Antonio",
  1: "João",
  2: "Maria Alves",
};

function Ranking() {
  return (
    <Style.Container>
      <Style.SubContainer>
        <p>Ranking</p>

        <Style.UnorderedList>
          {Object.keys(players).map((player) => (
            <Style.ListItem key={player}>
              <span>
                <FaUser />
                {players[player]}
              </span>

              {player === "0" && <FaTrophy />}
            </Style.ListItem>
          ))}
        </Style.UnorderedList>
      </Style.SubContainer>

      <Style.SubContainer>
        <p>Seu Openente</p>

        <Style.UnorderedList>
          <Style.ListItem>
            <span>
              <FaUser />
              {players[0]}
            </span>

            <img src={playerX} alt="" width={20} />
          </Style.ListItem>
        </Style.UnorderedList>
      </Style.SubContainer>
    </Style.Container>
  );
}

export default Ranking;
