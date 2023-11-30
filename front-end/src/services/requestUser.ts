import { ILoginData, IRegisterData } from "../provider/UserContext/@types";
import { api } from "./api";

interface HandleRequestConfig {
  headers: {
    Authorization: string;
  };
}

type RequestMethod = "get" | "post" | "put" | "patch" | "delete";

const handleRequest = async <T>(
  method: RequestMethod,
  url: string,
  token?: string,
  data?: any
): Promise<T> => {
  try {
    const config: HandleRequestConfig = {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    };


    let response;
    if (method === "patch") {
      response = await api[method](url, data, config);
    }
    if (method === "post") {
      response = await api[method](url, data);
    } else {
      response = await api[method](url, config);
    }

    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
    }
  }

export const registerUser = async (userData: IRegisterData) => {
  return handleRequest("post", "/clients", undefined, userData);
};

export const loginUser = async (loginData: ILoginData) => {
  return handleRequest("post", "/login", undefined, loginData);
};

export const getUsers = async (token: string) => {
  return handleRequest("get", "/clients", token);
};

export const getUserById = async (token: string, userId: string) => {
  return handleRequest("get", `/clients/${userId}`, token);
};

export const updateUser = async (
  token: string,
  userId: string,
  updatedData: any
) => {
  return handleRequest("patch", `/clients/${userId}`, token, updatedData);
};

export const deleteUser = async (token: string, userId: string) => {
  return handleRequest("delete", `/clients/${userId}`, token);
};
