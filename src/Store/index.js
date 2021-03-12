import {createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from './middleware/logger';
// import reducers

export default createStore(combineReducers({
  // todo: add reducers
}), {
  // todo : add intial state
}, applyMiddleware(
  reduxThunk,
  logger
));