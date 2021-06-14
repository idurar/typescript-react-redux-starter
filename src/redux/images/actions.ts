import { Dispatch } from "redux";
import * as actionTypes from "./types";
import { request } from "../../request";
import { isAnyOf } from "@reduxjs/toolkit";

type itemProps = {
  id: string;
  url: string;
};

export const images = {
  resetState: () => async (dispatch: Dispatch<any>) => {
    dispatch({
      type: actionTypes.RESET_STATE,
    });
  },
  search:
    (entity: string, category: string, page: number, limit?: number) =>
    async (dispatch: Dispatch<any>) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
      });

      let data = await request.search(entity, { category, page, limit });

      if (data.success === true) {
        let result: any[] = [];
        data.result.map((item: itemProps): void => {
          result.push({
            id: item.id,
            url: item.url,
          });
        });
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
