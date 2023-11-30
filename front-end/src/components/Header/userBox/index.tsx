import { useContext, useState } from "react";
import { StyledUserBox } from "./styled";
import { UserContext } from "../../../provider/UserContext/UserContext";
import Modal from "react-modal";
import { ModalEditProfile } from "../../Modal/ModalEditProfile";
import { StyledParagraph } from "../../../styles/typography";
import { StyledModalOverlay } from "../../../styles/modal";

export const UserBox = () => {
  const [toggle, setToggle] = useState(false);
  const {
    handleLogout,
    handleDeleteAccount,
    setDeleteModalOpen,
    isDeleteModalOpen,
  } = useContext(UserContext);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { userData } = useContext(UserContext);

  return (
    <StyledUserBox>
      <div onClick={() => setToggle(!toggle)} className="content_profile">
        <img
          className="profile_icon"
          src="src/assets/profile.png"
          alt="profile"
        />
      </div>

      {toggle && (
        <div className="content_btn-profile">
          <button onClick={() => setIsEditProfileModalOpen(true)}>
            Editar Perfil
          </button>
          <button onClick={() => setDeleteModalOpen(true)}>
            Excluir Conta
          </button>
          <button onClick={() => handleLogout()}>Sair?</button>
        </div>
      )}

      <Modal
        isOpen={isEditProfileModalOpen}
        onRequestClose={() => setIsEditProfileModalOpen(false)}
        className="modal_content"
      >
        <ModalEditProfile
          onClose={() => setIsEditProfileModalOpen(false)}
          user={userData}
        />
      </Modal>

      {isDeleteModalOpen && (
        <StyledModalOverlay>
          <div className="modal_container">
            <StyledParagraph>
              Tem certeza que deseja excluir sua conta?
            </StyledParagraph>
            <div className="content_btn-del">
              <button onClick={handleDeleteAccount}>Sim</button>
              <button onClick={() => setDeleteModalOpen(false)}>Não</button>
            </div>
          </div>
        </StyledModalOverlay>
      )}
    </StyledUserBox>
  );
};
