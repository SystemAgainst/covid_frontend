import instance from "./http";

const ENTITY = 'admin';

export const login = (payload) => instance.post(`${ENTITY}/auth`, payload);
