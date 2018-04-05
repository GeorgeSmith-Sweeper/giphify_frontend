import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import greeting from './greeting';

export default combineReducers({
  routing: routerReducer,
  greeting
});
