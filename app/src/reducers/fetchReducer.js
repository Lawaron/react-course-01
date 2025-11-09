export const initialState = {
  data: null,
  isLoading: false,
  error: "",
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, data: action.payload, error: "" };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload, data: null };
    default:
      return state;
  }
};
