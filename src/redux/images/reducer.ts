import * as actionTypes from "./types";

type stateProps = {
  result: Array<any>;
  nextPage: number;
  isLoading: boolean;
  isSuccess: boolean;
};

type actionProps = {
  type: string;
  payload?: stateProps["result"] | [];
};

const INITIAL_STATE: stateProps = {
  result: [],
  nextPage: 0,
  isLoading: false,
  isSuccess: false,
};

const imagesReducer = (
  state: stateProps = INITIAL_STATE,
  action: actionProps
) => {
  const { payload = [] } = action;
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
        result: [...state["result"], ...payload],
        nextPage: state.nextPage + 1,
        isLoading: false,
        isSuccess: true,
      };
    default:
      return state;
  }
};

export default imagesReducer;
