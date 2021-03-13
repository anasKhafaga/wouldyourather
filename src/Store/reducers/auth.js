import { USER_LOGIN, USER_LOGOUT, GET_USERS, SAVE_Q_ANS } from '../actions/auth'

export const authUser = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.user;
    case USER_LOGOUT:
      return null;
    case SAVE_Q_ANS:
      return {
        ...state,
        answers: {...state['answers'], [action.qid]: action.answer}
      }
    default:
      return state;
  }
}

export const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}