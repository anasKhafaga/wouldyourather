import { _getQuestions, _saveQuestion} from '../../_DATA'

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_Q = 'SAVE_Q';


const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

const saveQ = (q) => {
  return {
    type: SAVE_Q,
    question: q
  }
}

export const handleGetQuestions = () => {
  return (dispatch) => {
    _getQuestions()
      .then(res => {
        dispatch(getQuestions(res));
      }).catch(err => {
      alert('Oops! something went wrong!')
    })
  }
}

export const handleSaveQ = (q) => {
  return (dispatch) => {
    _saveQuestion(q)
      .then((formattedQ) => {
        dispatch(saveQ(formattedQ));
      })
      .catch((err) => alert('Oops! something went wrong!'));
  }
}