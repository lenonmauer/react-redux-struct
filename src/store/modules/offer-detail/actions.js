import * as types from './types';

export const getOfferDetailRequest = () => ({
  type: types.GET_OFFER_DETAIL_REQUEST,
  payload: {},
});

export const getOfferDetailRequestSuccess = () => ({
  type: types.GET_OFFER_DETAIL_REQUEST_SUCCESS,
  payload: {},
});

export default {
  getOfferDetailRequest,
  getOfferDetailRequestSuccess,
};
