import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { offerDetailActions } from './store/modules/offer-detail';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.offerDetail.loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(offerDetailActions.getOfferDetailRequest());
    }, 3000);
  }, []);

  return <div>{`State = ${loading}`}</div>;
}

export default App;
