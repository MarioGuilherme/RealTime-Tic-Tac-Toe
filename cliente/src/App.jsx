import { Fragment } from "react";
import { BoardProvider } from "./context/boardContext";
import GlobalStyle from "./styles/global";
import Main from "./components/main/main";

function App() {
  return (
    <BoardProvider>
      <GlobalStyle />
      <Fragment>
        <Main />
      </Fragment>
    </BoardProvider>
  );
}

export default App;
