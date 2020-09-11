import fetch from 'cross-fetch';
import { fillData, requestData } from './usersSlice';


export const fetchUsers = (page, perPage) => {
  return dispatch => {
    dispatch(requestData());
    return fetch(`https://reqres.in/api/users?page=${page}&per_page=${perPage}`)
      .then(response => response.json())
      .then(json => dispatch(fillData(json)))
      .catch(error => dispatch(fillData({})));
  };
};