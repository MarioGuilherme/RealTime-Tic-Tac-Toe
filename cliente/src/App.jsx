import { Fragment } from "react";
import { BoardProvider } from "./context/boardContext";
import GlobalStyle from "./styles/global";
import Main from "./components/main/main";
import ModalContainer from "./components/modal/modal";

function App() {
  return (
    <BoardProvider>
      <GlobalStyle />
      <Fragment>
        <Main />
        <ModalContainer />
      </Fragment>
    </BoardProvider>
  );
}

export default App;
