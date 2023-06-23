import { TestAction, StoresAction } from "./Actions";

import * as Constants from "./Constants";

import axios from "axios";

export const getRuleData = () => async (dispatch) => {
  dispatch(TestAction(Constants.TEST_DATA_START, {}, "", true));

  await axios
    .get("http://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      dispatch(
        TestAction(
          Constants.TEST_DATA_SUCCESS,
          response.data,
          "Successful",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            TestAction(
              Constants.TEST_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else if (error.response && error.response.status === 403) {
          dispatch(
            TestAction(
              Constants.TEST_DATA_FAILURE,
              {},
              "Session Has Expired",
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            TestAction(
              Constants.TEST_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else {
          dispatch(
            TestAction(
              Constants.TEST_DATA_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const getStoresData = () => async (dispatch) => {
  dispatch(StoresAction(Constants.STORES_DATA_START, {}, "", true));

  await axios
    .get("http://localhost:5200/api/Stores/StoresList")
    .then((response) => {
      dispatch(
        TestAction(
          Constants.STORES_DATA_SUCCESS,
          response.data,
          "Successful",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            TestAction(
              Constants.STORES_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else if (error.response && error.response.status === 403) {
          dispatch(
            TestAction(
              Constants.STORES_DATA_FAILURE,
              {},
              "Session Has Expired",
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            TestAction(
              Constants.TEST_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else {
          dispatch(
            TestAction(
              Constants.STORES_DATA_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};
