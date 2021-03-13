import { SAVE_Q_ANS } from '../actions/auth';
import { GET_QUESTIONS, SAVE_Q} from '../actions/questions'

export const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
    case SAVE_Q:
      alert('Question Created Successfully');
      return {
        ...state,
        [action.question.id]: action.question
      }
    case SAVE_Q_ANS:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authUser]),
          },
        },
      };
    default:
      return state;
  }
}