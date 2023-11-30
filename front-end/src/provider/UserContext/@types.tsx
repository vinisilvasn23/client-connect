import { NavigateFunction } from "react-router-dom";

export interface IUser {
  email: string;
  fullName: string;
  id: string;
  phone: string;
  registrationDate: string;
}

export interface ILoginData {
  email: string;
  password: string;
}
export interface IRegisterData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUserContext {
  userData: IUser | null;
  setUserData: React.Dispatch<React.SetStateAction<IUser | null>>;
  handleLogin: (loginData: ILoginData) => Promise<void>;
  handleRegister: (registerData: IRegisterData) => Promise<void>;
  navigate: NavigateFunction;
  loadingPage: boolean;
  setLoadingPage: React.Dispatch<React.SetStateAction<boolean>>;
  userList: IUser[];
  setUserDataList: React.Dispatch<React.SetStateAction<IUser[]>>;
  handleLogout: () => void;
  token: string;
  handleDeleteAccount: () => void;
  setDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDeleteModalOpen: boolean,
}
