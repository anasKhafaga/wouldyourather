import { createStore, combineReducers, applyMiddleware } from 'redux';
import {authUser, users} from './reducers/auth'
import {questions} from './reducers/questions'
import {redirect} from './reducers/redirect'
import {classChange} from './reducers/class'
import reduxThunk from 'redux-thunk';
import logger from './middleware/logger';
// import reducers

export default createStore(
  combineReducers({
    // todo: add reducers
    users,
    authUser,
    questions,
    redirect,
    classChange
  }),
  {
    users: {},
    questions: {},
    authUser: null,
    redirect: false,
    classChange: {
      one: null,
      two: null
    }
  },
  applyMiddleware(reduxThunk, logger)
);