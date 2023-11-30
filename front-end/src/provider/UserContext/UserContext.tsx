import { createContext, useEffect, useState } from "react";
import {
  IUserContext,
  IUserProviderProps,
  IUser,
  ILoginData,
  IRegisterData,
} from "./@types";
import { useNavigate } from "react-router-dom";
import {
  deleteUser,
  getUserById,
  loginUser,
  registerUser,
} from "../../services/requestUser";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [userList, setUserDataList] = useState<IUser[]>([]);
  const [loadingPage, setLoadingPage] = useState(false);
  const tokenString = localStorage.getItem("@CC:Token");
  const token = tokenString ? JSON.parse(tokenString) : null;
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const response = await loginUser(loginData);
      const { token }: any = response;
      const decodedToken: any = jwtDecode(token.token);
      const userId = decodedToken.sub;

      const userData: any = await getUserById(token.token, userId);

      setUserData(userData);
      localStorage.setItem("@CC:Token", JSON.stringify(token.token));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      console.error("Erro no login:", error);
      toast.error("Email ou senha incorretos!");
    }
  };

  const handleRegister = async (registerData: IRegisterData) => {
    try {
      await registerUser(registerData);
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Usuário já cadastrado.");
    }
  };

  const handleLogout = () => {
    setLoadingPage(true);
    localStorage.removeItem("@CC:Token");
    setUserData(null);
    setTimeout(() => {
      navigate("/");
      setLoadingPage(false);
    }, 1500);
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteUser(token, userData!.id);
      toast.success("Conta deletada com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir conta:", error);
    } finally {
      setDeleteModalOpen(false);
      handleLogout();
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("@CC:Token");

    const loadUser = async () => {
      if (storedToken === null) {
        return null;
      } else {
        const decodedToken: any = jwtDecode(storedToken);
        const token = storedToken ? JSON.parse(storedToken) : null;
        const userId = decodedToken.sub;

        const userData: any = await getUserById(token, userId);
        setUserData(userData);
        navigate("/dashboard");
      }
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        handleLogin,
        handleRegister,
        navigate,
        loadingPage,
        setLoadingPage,
        userList,
        setUserDataList,
        handleLogout,
        token,
        handleDeleteAccount,
        setDeleteModalOpen,
        isDeleteModalOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
