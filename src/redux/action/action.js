import axios from "axios";

export function getDataMovie() {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_LOADING" });
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=f3ea600c6c90e26c27c2437692851c1e`
    );
    if (data.results.length > 0) {
      dispatch({ type: "FETCH_FIRST_DATA_SUCCESS", payload: data.results });
    } else {
      dispatch({ type: "FETCH_FIRST_DATA_ERROR", payload: "ERROR" });
    }
  };
}

export function getDataTvShow() {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_LOADING" });
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=f3ea600c6c90e26c27c2437692851c1e`
    );
    if (data.results.length > 0) {
      dispatch({ type: "FETCH_SECOND_DATA_SUCCESS", payload: data.results });
    } else {
      dispatch({ type: "FETCH_SECOND_DATA_ERROR", payload: "ERROR" });
    }
  };
}

export function getDataPeople() {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_LOADING" });
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/person/week?api_key=f3ea600c6c90e26c27c2437692851c1e`
    );
    if (data.results.length) {
      dispatch({ type: "FETCH_THIRD_DATA_SUCCESS", payload: data.results });
    } else {
      dispatch({ type: "FETCH_THIRD_DATA_ERROR", payload: "ERROR" });
    }
  };
}
