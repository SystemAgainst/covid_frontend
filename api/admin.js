import instance from "./http";

const ENTITY = 'admin';

export const login = (payload) => instance.post(`${ENTITY}/auth`, payload);
export const getAllClients = () => instance.get(`${ENTITY}/list`);
export const getClientById = (id) => instance.get(`${ENTITY}/${+id}`);