import {  SAVE_Q_ANS } from '../actions/auth';
import { CLASS_START } from '../actions/class'

export const classChange = (state = {}, action) => {
  switch (action.type) {
    case SAVE_Q_ANS:
      if (action.answer === 'optionOne') {
        return {
          one: 'chosen',
          two: null
        }
      } else {
        return {
          one: null,
          two: 'chosen'
        }
      }
    case CLASS_START:
      if (action.answer === 'optionOne') {
        return {
          one: 'chosen',
          two: null
        }
      } else {
        return {
          one: null,
          two: 'chosen'
        }
      }
    default:
      return state;
  }
};
