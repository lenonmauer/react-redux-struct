import { combineReducers } from 'redux';

import { offerDetailReducer } from './modules/offer-detail';

const rootReducer = combineReducers({
  offerDetail: offerDetailReducer,
});

export default rootReducer;
