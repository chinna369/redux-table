import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchPhotos = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
  dispatch({ type: 'FETCH_PHOTOS', payload: response.data });
};

export const fetchUsers = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: 'FETCH_USERS', payload: response.data });
};
