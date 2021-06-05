import * as actionTypes from "./types";

type stateProps = {
  result: Array<any> | {};
  isLoading: boolean;
  isSuccess: boolean;
};

type actionProps = {
  type: string;
  payload?: stateProps["result"] | null;
};

const INITIAL_STATE: stateProps = {
  result: [],
  isLoading: false,
  isSuccess: false,
};

const categoryReducer = (
  state: stateProps = INITIAL_STATE,
  action: actionProps
) => {
  const { payload = null } = action;
  switch (action.type) {
    case actionTypes.RESET_STATE:
      return INITIAL_STATE;

    case actionTypes.REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };
    case actionTypes.REQUEST_SUCCESS:
      return {
        result: payload,
        isLoading: false,
        isSuccess: true,
      };
    default:
      return state;
  }
};

export default categoryReducer;
