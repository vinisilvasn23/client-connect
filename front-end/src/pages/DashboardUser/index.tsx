import { useContext, useState } from "react";
import { UserContext } from "../../provider/UserContext/UserContext";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import { ContactContext } from "../../provider/ContactContext/ContactContext";
import { ModalCreateContact } from "../../components/Modal/ModalCreateContact";
import { ModalEditContact } from "../../components/Modal/ModalEditContact";
import Modal from "react-modal";
import { ListContacts } from "../../components/ListContacts";
import {
  StyledParagraphContact,
  StyledTitle,
  StyledTitleSmall,
} from "../../styles/typography";
import { Footer } from "../../components/Footer";
import { StyledDashboard } from "./styled";
import { ButtonAdd } from "../../components/Button/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const contactsPerPage = 10;

export const DashboardUser = () => {
  const { loadingPage, userData } = useContext(UserContext);
  const { contactList, getContactById, currentPage, setCurrentPage } =
    useContext(ContactContext);
  const [isCreateContactModalOpen, setIsCreateContactModalOpen] =
    useState(false);
  const [isEditContactModalOpen, setIsEditContactModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState<string>("");

  if (loadingPage) {
    return <Loading />;
  }

  const totalPages = Math.ceil(contactList.length / contactsPerPage);
  const startIndex = (currentPage - 1) * contactsPerPage;
  const endIndex = startIndex + contactsPerPage;
  const currentContacts = contactList.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Header />
      <StyledDashboard>
        <div className="content_title-dashboard">
          <StyledTitle>Bem-vindo(a) à nossa Plataforma</StyledTitle>
          <StyledParagraphContact>{userData?.fullName}</StyledParagraphContact>
          <ButtonAdd onClick={() => setIsCreateContactModalOpen(true)}>
            Adicionar Contato
          </ButtonAdd>
        </div>
        {contactList.length <= 0 ? (
          <div className="content_not-contact">
            <StyledTitleSmall>
              Você ainda não possui nenhum contato.
            </StyledTitleSmall>
          </div>
        ) : (
          <>
            <ListContacts
              contacts={currentContacts}
              setSelectedContactId={setSelectedContactId}
              modalOpen={setIsEditContactModalOpen}
              selectedContactId={selectedContactId}
            />

            <div className="content_pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>

              <span>{`  Página ${currentPage} de ${totalPages}  `}</span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </>
        )}

        <Modal
          isOpen={isCreateContactModalOpen}
          onRequestClose={() => setIsCreateContactModalOpen(false)}
          className="modallogin_content"
        >
          <ModalCreateContact
            onClose={() => {
              setIsCreateContactModalOpen(false);
            }}
          />
        </Modal>

        <Modal
          isOpen={isEditContactModalOpen}
          onRequestClose={() => {
            setIsEditContactModalOpen(false);
            setSelectedContactId("");
          }}
        >
          <ModalEditContact
            onClose={() => {
              setIsEditContactModalOpen(false);
              setSelectedContactId("");
            }}
            contact={getContactById(selectedContactId)}
          />
        </Modal>
      </StyledDashboard>
      <Footer />
    </>
  );
};
