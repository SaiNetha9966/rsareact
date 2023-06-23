export const TestAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading
    }
  };
};

export const StoresAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading
    }
  };
};
