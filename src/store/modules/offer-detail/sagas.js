import { put, delay } from 'redux-saga/effects';

import * as actions from './actions';

export function* getOfferDetailSaga() {
  yield put(delay(1000));
  yield put(actions.getOfferDetailRequestSuccess());
}
