import { ActionTypes } from "./actions";

const initialState = {
  movies: [],
  loading: true,
  search: "",
  type: "all",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.setMovies:
      return {
        ...state,
        movies: payload,
      };
    case ActionTypes.setSearch:
      return {
        ...state,
        search: payload,
      };
    case ActionTypes.setLoading:
      return {
        ...state,
        loading: payload,
      };
    case ActionTypes.setType:
      return {
        ...state,
        type: payload,
      };

    default:
      return state;
  }
};
