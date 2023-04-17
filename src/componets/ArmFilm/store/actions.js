export const ActionTypes = {
  setMovies: "setMovies",
  setSearch: "setSearch",
  setLoading: "setLoading",
  setType: "setType",
};

export const setMovies = (movies) => ({
  type: ActionTypes.setMovies,
  payload: movies,
});
export const setSearch = (search) => ({
  type: ActionTypes.setSearch,
  payload: search,
});
export const setLoading = (loading) => ({
  type: ActionTypes.setLoading,
  loading,
});

export const setType = (type) => ({
  type: ActionTypes.setType,
  payload: type,
});
