import { NavigateFunction } from "react-router-dom";

export interface IContact {
  email: string;
  fullName: string;
  id: string;
  phone: string;
  registrationDate: string;
}

export interface ICreateContact {
  fullName: string;
  email: string;
  phone: string;
}

export interface IContactProviderProps {
  children: React.ReactNode;
}

export interface IContactContext {
  contactData: IContact | null;
  setContactData: React.Dispatch<React.SetStateAction<IContact | null>>;
  navigate: NavigateFunction;
  loadingPage: boolean;
  setLoadingPage: React.Dispatch<React.SetStateAction<boolean>>;
  contactList: IContact[];
  setContactDataList: React.Dispatch<React.SetStateAction<IContact[]>>;
  registerContact: (registerData: ICreateContact) => Promise<void>;
  getContactById: (contactId: string) => IContact | null;
  formatPhoneNumber: (phoneNumber: string) => string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}