import { _getUsers, _saveQuestionAnswer } from '../../_DATA';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const GET_USERS = 'GET_USERS';
export const SAVE_Q_ANS = 'SAVE_Q_ANS';

export const userLogin = (user) => {
  return {
    type: USER_LOGIN,
    user
  }
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  }
}

const getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}

const saveQAns = (user) => {
  return {
    type: SAVE_Q_ANS,
    qid: user.qid,
    answer: user.answer
  };
};

export const handleGetUsers = () => {
  return (dispatch) => {
    _getUsers()
      .then(users => {
        dispatch(getUsers(users));
      })
      .catch(err => {
        alert('Oops! something went wrong!');
    })
  }
}

export const handleSaveQAns = (qAns) => {
  console.log(qAns)
  return (dispatch) => {
    _saveQuestionAnswer(qAns)
      .then(() => {
        dispatch(saveQAns(qAns));
      })
      .catch((err) => alert('Oops! something went wrong!'));
  };
};
