import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { offerDetailActions } from './store/modules/offer-detail';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.offerDetail);

  useEffect(() => {
    setTimeout(() => {
      dispatch(offerDetailActions.getOfferDetailRequest());
    }, 3000);
  }, []);

  return <div>{`State = ${state}`}</div>;
}

export default App;
