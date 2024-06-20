import instance from "./http";

const ENTITY = 'client';

export const clientCreate = (payload) => instance.post(`${ENTITY}/create`, payload);
