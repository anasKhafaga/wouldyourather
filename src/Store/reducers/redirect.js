import { SAVE_Q } from '../actions/questions';
import { STOP_REDIRECT } from '../actions/redirect';

export const redirect = (state = {}, action) => {
  switch (action.type) {
    case STOP_REDIRECT:
      return false
    case SAVE_Q:
      return true
    default:
      return state
  }
}
