import { combineReducers } from 'redux';
import auth from './auth-reducer';
import serverListReducer from './serverList-reducer';

export default combineReducers({
  auth,
  serverListReducer,
});
