import axios from 'axios';

const url = 'http://localhost:5000/oysters';

export const fetchOysters = () => axios.get(url);
export const createOyster = (newOyster) => axios.post(url, newOyster);
export const updateOyster = (id, updatedOyster) => axios.patch(`${url}/${id}`, updatedOyster);
export const deleteOyster = (id) => axios.delete(`${url}/${id}`);