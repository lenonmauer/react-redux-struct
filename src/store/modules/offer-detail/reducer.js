import { combineReducers } from 'redux';
import * as types from './types';

const INITIAL_STATE = {
  loading: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.GET_OFFER_DETAIL_REQUEST: {
      return {
        loading: true,
      };
    }
    case types.GET_OFFER_DETAIL_REQUEST_SUCCESS: {
      return {
        loading: false,
      };
    }

    default:
      return state;
  }
}
