import instance from "./http";

const ENTITY = 'admin';

export const login = (payload) => instance.post(`${ENTITY}/auth`, payload);
export const getAllClients = () => instance.get(`${ENTITY}/list`);
export const getClientById = (id) => instance.get(`${ENTITY}/${+id}`);
export const updateStatusById = (id, payload) => instance.patch(`${ENTITY}/${+id}`, payload);
export const sendEmail = (id, payload) => instance.post(`${ENTITY}/${id}/email`, payload);