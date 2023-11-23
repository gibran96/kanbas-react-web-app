import axios from "axios";

const request = axios.create({
  withCredentials: true,
})

export const BASE_API = process.env.REACT_APP_API_BASE;
export const USERS_API = `${BASE_API}/users`;

export const signIn = async (credentials) => {
  const response = await request.post(`${USERS_API}/signIn`, credentials);
  return response.data;
}
export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  return response.data;
}
export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
}
export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
}
export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
}

export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
}

export const deleteUser = async (id) => {
  const response = await request.delete(`${USERS_API}/${id}`);
  return response.data;
}

export const signUp = async (credentials) => {
  const response = await request.post(`${USERS_API}/signUp`, credentials);
  return response.data;
}

export const signOut = async () => {
  const response = await request.post(`${USERS_API}/signOut`);
  return response.data;
}