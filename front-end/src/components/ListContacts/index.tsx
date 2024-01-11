import { useContext, useState } from "react";
import { deleteContact } from "../../services/requestContact";
import { UserContext } from "../../provider/UserContext/UserContext";
import { ContactContext } from "../../provider/ContactContext/ContactContext";
import { IContact } from "../../provider/ContactContext/@types";
import { StyledListContacts } from "./styled";
import { StyledParagraphContact, StyledTitle } from "../../styles/typography";
import { StyledModalOverlay } from "../../styles/modal";

export const ListContacts = ({
  setSelectedContactId,
  modalOpen,
  selectedContactId,
  contacts,
}: {
  setSelectedContactId: React.Dispatch<React.SetStateAction<string>>;
  modalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedContactId: string | null;
  contacts: IContact[];
}) => {
  const [expandedContactId, setExpandedContactId] = useState<null | string>(
    null
  );
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] =
    useState(false);
  const { token } = useContext(UserContext);
  const { formatPhoneNumber } = useContext(ContactContext);

  const formatDate = (dateString: string | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  const handleEditContact = (contactId: string) => {
    setSelectedContactId(contactId);
    modalOpen(true);
  };

  const handleDeleteContact = async (contactId: string) => {
    try {
      await deleteContact(token, contactId);
      setIsDeleteConfirmationModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const showDeleteConfirmationModal = (contactId: string) => {
    setSelectedContactId(contactId);
    setIsDeleteConfirmationModalOpen(true);
  };

  return (
    <StyledListContacts>
      <StyledTitle>Lista de Contatos</StyledTitle>
      <div className="contact_card">
        {contacts.map((contact) => (
          <div className="card" key={contact.id}>
            <StyledParagraphContact>{contact.fullName}</StyledParagraphContact>
            <button
              onClick={() =>
                setExpandedContactId(
                  expandedContactId === contact.id ? null : contact.id
                )
              }
            >
              {expandedContactId === contact.id
                ? "Ocultar Detalhes"
                : "Mostrar Detalhes"}
            </button>
            {expandedContactId === contact.id && (
              <div>
                <StyledParagraphContact>
                  Email: {contact.email}
                </StyledParagraphContact>
                <StyledParagraphContact>
                  Telefone: {formatPhoneNumber(contact.phone)}
                </StyledParagraphContact>
                <StyledParagraphContact>
                  Registrado em: {formatDate(contact.registrationDate)}
                </StyledParagraphContact>
                <button onClick={() => handleEditContact(contact.id)}>
                  Editar Contato
                </button>
                <button onClick={() => showDeleteConfirmationModal(contact.id)}>
                  Deletar Contato
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {isDeleteConfirmationModalOpen && (
        <StyledModalOverlay>
          <div className="modal_container">
            <StyledParagraphContact>
              Deseja deletar o contato?
            </StyledParagraphContact>
            <div className="content_btn-del">
              <button
                onClick={() => handleDeleteContact(selectedContactId || "")}
              >
                Sim
              </button>
              <button onClick={() => setIsDeleteConfirmationModalOpen(false)}>
                Não
              </button>
            </div>
          </div>
        </StyledModalOverlay>
      )}
    </StyledListContacts>
  );
};
