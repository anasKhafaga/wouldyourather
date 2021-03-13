import { GET_QUESTIONS, SAVE_Q} from '../actions/questions'

export const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
    case SAVE_Q:
      return {
        ...state,
        [action.question.id]: action.question
      }
    default:
      return state;
  }
}