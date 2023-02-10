import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getOysters = () => async (dispatch) => {
    try {
        const { data } = await api.fetchOysters();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createOyster = (oyster) => async (dispatch) => {
    try {
        const { data } = await api.createOyster(oyster);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateOyster = (id, oyster) => async (dispatch) => {
    try {
        const { data } = await api.updateOyster(id, oyster);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteOyster = (id) => async (dispatch) => {
    try {
        await api.deleteOyster(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};