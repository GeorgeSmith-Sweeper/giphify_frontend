import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import greetingReducer from './greeting';

export default combineReducers({
  routing: routerReducer,
  greetingReducer
});
