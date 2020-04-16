import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './types';

// Load User
export const loadUser = () => async dispatch => {
  try {
    const res = localStorage.getItem('token');
    if (!res) {
      return false;
    }

    dispatch({
      type: USER_LOADED,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Login User
export const login = (username, password) => async dispatch => {
  try {
    const res = await fetch('http://playground.tesonet.lt/v1/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ username, password })
    });

    if (res.ok === false) {
      throw new SyntaxError('Username or password is incorect.');
    }

    const result = await res.json();

    dispatch({
      type: LOGIN_SUCCESS,
      payload: result
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message
    });
  }
};

// Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
