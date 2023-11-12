import Modal from "react-modal";
import { useContext } from "react";
import BoardContext from "../../context/boardContext";
import * as Style from "./style";
import { colorPalet } from "../../styles/global";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    border: `5px solid ${colorPalet.colorBaseBlack100}`,
    borderRadius: "12px",
},

  overlay: {
    background: `${colorPalet.colorBaseBlackTransparent}`,
  },
};

Modal.setAppElement("#root");

function ModalContainer() {
  const {
    modalIsOpen,
    afterOpenModal,
    closeModal,
    formSubmit,
    playerName,
    setPlayerName,
    isInitialModal,
    reload,
  } = useContext(BoardContext);

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={isInitialModal ? customStyles : { ...customStyles, content: { ...customStyles.content, background: `${colorPalet.colorBlueBlue200}` } }}
    >
      {isInitialModal ? (
        <Style.Form
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <Style.Input
            placeholder="Seu nome"
            required
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />

          <Style.HolderButton>
            <button>Pronto</button>
          </Style.HolderButton>
        </Style.Form>
      ) : (
        <Style.Winner>
          Nem sempre foi sorte...
          <div>
            Parabéns <span>{playerName}</span>!{" "}
          </div>
          <Style.HolderButton>
            <button onClick={() => reload()}>Nova Rodada</button>
          </Style.HolderButton>
        </Style.Winner>
      )}
    </Modal>
  );
}

export default ModalContainer;
