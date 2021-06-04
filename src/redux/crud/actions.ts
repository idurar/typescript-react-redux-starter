import { Dispatch } from "redux";
import * as actionTypes from "./types";
import { request } from "../../request";

export const crud = {
  resetState: () => async (dispatch: Dispatch<any>) => {
    dispatch({
      type: actionTypes.RESET_STATE,
    });
  },
  list:
    (entity: string, currentPage: number = 1) =>
    async (dispatch: Dispatch<any>) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
      });

      let data = await request.list(entity, { page: currentPage });

      if (data.success === true) {
        const result = {
          items: data.result,
          pagination: {
            current: parseInt(data.pagination.page, 10),
            pageSize: 10,
            total: parseInt(data.pagination.count, 10),
          },
        };
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          payload: result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
        });
      }
    },
};
