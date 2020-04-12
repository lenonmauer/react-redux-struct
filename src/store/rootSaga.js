import { all, takeLatest } from 'redux-saga/effects';

import { offerDetailTypes, offerDetailSagas } from './modules/offer-detail';

export default function* rootSaga() {
  yield all([takeLatest(offerDetailTypes.GET_OFFER_DETAIL_REQUEST, offerDetailSagas)]);
}
