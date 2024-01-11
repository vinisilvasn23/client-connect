import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContact, getContacts } from "../../services/requestContact";
import { toast } from "react-toastify";
import {
  IContact,
  IContactContext,
  IContactProviderProps,
  ICreateContact,
} from "./@types";
import { UserContext } from "../UserContext/UserContext";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const [contactData, setContactData] = useState<IContact | null>(null);
  const [contactList, setContactDataList] = useState<IContact[]>([]);
  const [loadingPage, setLoadingPage] = useState(false);
  const { token } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const registerContact = async (formData: ICreateContact) => {
    try {
      await createContact(token, formData);
      toast.success("Contato cadastrado!");
    } catch (error) {
      console.error(error);
      toast.error("Contato já cadastrado.");
    }
  };

  const getContactById = (contactId: string): IContact => {
    return contactList.find((contact: IContact) => contact.id === contactId)!;
  };

  const formatPhoneNumber = (inputValue: string) => {
    const phoneNumber = inputValue.replace(/\D/g, "");

    if (phoneNumber.length >= 10) {
      return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(
        2,
        7
      )}-${phoneNumber.substring(7, 11)}`;
    } else {
      return phoneNumber;
    }
  };

  useEffect(() => {
    if (token) {
      const fetchContacts = async () => {
        try {
          const contacts = (await getContacts(token)) as IContact[];
          setContactDataList(contacts);
        } catch (error) {
          console.error(error);
          toast.error("Erro ao carregar contatos.");
        }
      };

      fetchContacts();
    }
  }, [registerContact, currentPage]);

  return (
    <ContactContext.Provider
      value={{
        setContactData,
        navigate,
        loadingPage,
        setLoadingPage,
        setContactDataList,
        contactData,
        contactList,
        registerContact,
        getContactById,
        formatPhoneNumber,
        setCurrentPage,
        currentPage,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
