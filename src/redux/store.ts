import { createStore, AnyAction } from 'redux';
import {
  IS_LOADED,
  SET_USERS,
} from './ActionTypes';

export const setLoaded = (done: boolean) => ({
  type: IS_LOADED,
  payload: done,
});

const initialState: State = {
  isLoading: false,
  phones: [],
};

const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case IS_LOADED: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case SET_USERS:
      return {
        ...state,
        phones: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);