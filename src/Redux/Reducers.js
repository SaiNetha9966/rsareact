export const TestReducer = (state, payload) => {
  return {
    ...state,
    TestData: payload && payload.data && payload.data,
    TestMsg: payload && payload.message && payload.message,
    TestLoading: payload && payload.loading && payload.loading
  };
};

export const StoresReducer = (state, payload) => {
  return {
    ...state,
    StoresData: payload && payload.data && payload.data,
    StoresMsg: payload && payload.message && payload.message,
    StoresLoading: payload && payload.loading && payload.loading
  };
};
