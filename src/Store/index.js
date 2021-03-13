import { createStore, combineReducers, applyMiddleware } from 'redux';
import {authUser, users} from './reducers/auth'
import {questions} from './reducers/questions'
import reduxThunk from 'redux-thunk';
import logger from './middleware/logger';
// import reducers

export default createStore(
  combineReducers({
    // todo: add reducers
    users,
    authUser,
    questions,
  }),
  {
    users: {},
    questions: {},
    authUser: null,
  },
  applyMiddleware(reduxThunk, logger)
);