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
    if (data) {
      response = await api[method](url, data, config);
    } else {
      response = await api[method](url, config);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createContact = async (token: string, contactData: any) => {
  return handleRequest("post", "/contacts", token, contactData);
};

export const getContacts = async (token: string) => {
  return handleRequest("get", "/contacts", token);
};

export const getContactById = async (token: string, contactId: string) => {
  return handleRequest("get", `/contacts/${contactId}`, token);
};

export const updateContact = async (
  token: string,
  contactId: string,
  updatedData: any
) => {
  return handleRequest("patch", `/contacts/${contactId}`, token, updatedData);
};

export const deleteContact = async (token: string, contactId: string) => {
  return handleRequest("delete", `/contacts/${contactId}`, token);
};
