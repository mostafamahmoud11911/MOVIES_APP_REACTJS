const initialState = {
  loading: false,
  firstData: [],
  secondData: [],
  thirdData: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_FIRST_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        firstData: action.payload,
        error: null,
      };
    case "FETCH_FIRST_DATA_ERROR":
      return {
        ...state,
        loading: false,
        firstData: [],
        error: action.payload,
      };
    case "FETCH_SECOND_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        secondData: action.payload,
        error: null,
      };
    case "FETCH_SECOND_DATA_ERROR":
      return {
        ...state,
        loading: false,
        secondData: [],
        error: action.payload,
      };
    case "FETCH_THIRD_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        thirdData: action.payload,
        error:null
      };
    case "FETCH_THIRD_DATA_ERROR":
      return {
        ...state,
        loading: false,
        thirdData: [],
        error: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;
