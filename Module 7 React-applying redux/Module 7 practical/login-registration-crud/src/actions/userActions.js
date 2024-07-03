import axios from 'axios';

const API_URL = 'http://localhost:3001/users';

export const getUsers = () => async dispatch => {
    const response = await axios.get(API_URL);
    dispatch({ type: 'GET_USERS', payload: response.data });
};

export const addUser = user => async dispatch => {
    const response = await axios.post(API_URL, user);
    dispatch({ type: 'ADD_USER', payload: response.data });
};

export const deleteUser = id => async dispatch => {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: 'DELETE_USER', payload: id });
};

export const updateUser = user => async dispatch => {
    const response = await axios.put(`${API_URL}/${user.id}`, user);
    dispatch({ type: 'UPDATE_USER', payload: response.data });
};
