import INITIAL_STATE from "./IntialState";

import { TestReducer, StoresReducer } from "./Reducers";

const reducers = {
  TEST_DATA_START: TestReducer,
  TEST_DATA_SUCCESS: TestReducer,
  TEST_DATA_FAILURE: TestReducer,

  STORES_DATA_START: StoresReducer,
  STORES_DATA_SUCCESS: StoresReducer,
  STORES_DATA_FAILURE: StoresReducer
};

export const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
