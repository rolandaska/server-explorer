

import { GET_SERVERS_LIST_SUCCESS, GET_SERVERS_LIST_FAILURE } from './types';

// Get servers list
export const getServersList = () => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch('http://playground.tesonet.lt/v1/servers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token,
      },
    });
    
    if (res.ok === false) {
      throw new SyntaxError('OPS! Something went wrong. We are unable to get server list.');
    }

    const result = await res.json();

    dispatch({
      type: GET_SERVERS_LIST_SUCCESS,
      payload: result
    });
  } catch (err) {
    dispatch({
      type: GET_SERVERS_LIST_FAILURE,
      payload: err.message
    });
  }
};
