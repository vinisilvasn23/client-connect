import { useContext, useState } from "react";
import { HeaderStyle } from "./styled";
import Modal from "react-modal";
import { ModalLogin } from "../Modal/ModalLogin";
import { ModalRegister } from "../Modal/ModalRegister";
import { UserContext } from "../../provider/UserContext/UserContext";
import { UserBox } from "./userBox";

export const Header = () => {
  const [isModal, setIsModal] = useState(false);
  const [typeModal, setTypeModal] = useState("login");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { userData } = useContext(UserContext);

  const handleModal = (type: string) => {
    setTypeModal(type);
    setIsModal(!isModal);
  };

  return (
    <HeaderStyle>
      <div className="box">
        <img className="logo-cc" src="src/assets/cc.png" alt="Imagem da Logo" />
      </div>
      <div className="content_btn">
        {userData !== null ? (
          <UserBox />
        ) : (
          <>
            <button onClick={() => handleModal("login")}>Entrar</button>
            <button onClick={() => handleModal("register")}>Registrar</button>
          </>
        )}
      </div>

      <Modal
        isOpen={isModal}
        onRequestClose={() => {
          setIsModal(false);
          setIsLoginModalOpen(false);
        }}
        className="modallogin_content"
      >
        {typeModal === "login" ? (
          <ModalLogin
            handleModal={() => {
              setIsModal(false);
              setIsLoginModalOpen(false);
            }}
          />
        ) : (
          <ModalRegister
            onClose={() => {
              setIsModal(false);
            }}
            setIsLoginModalOpen={setIsLoginModalOpen}
          />
        )}
      </Modal>

      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={() => {
          setIsLoginModalOpen(false);
        }}
      >
        <ModalLogin
          handleModal={() => {
            setIsLoginModalOpen(false);
          }}
        />
      </Modal>
    </HeaderStyle>
  );
};
