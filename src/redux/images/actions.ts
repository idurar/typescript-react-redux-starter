import { Dispatch } from "redux";
import * as actionTypes from "./types";
import { request } from "../../request";

export const images = {
  resetState: () => async (dispatch: Dispatch<any>) => {
    dispatch({
      type: actionTypes.RESET_STATE,
    });
  },
  list:
    (entity: string, category: string, limit: number) =>
    async (dispatch: Dispatch<any>) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
      });

      let data = await request.search(entity, { category, limit });

      if (data.success === true) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          payload: data.result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
        });
      }
    },
};
