import Board from "../board/board";
import Turn from "../turn/turn";
import Ranking from "./../ranking/ranking";
import { Section } from "./style";

function Main() {
  return (
    <Section>
      <Turn />
      <Board />
      <Ranking />
    </Section>
  );
}

export default Main;
