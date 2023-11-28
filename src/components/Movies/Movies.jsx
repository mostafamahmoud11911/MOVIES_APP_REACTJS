import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDataMovie } from "../../redux/action/action";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

function Movies({ movies, movie }) {
  useEffect(() => {
    movie();
  }, []);

  return (
    <>
      {movies.loading && <Loading />}

      {!movies.loading && (
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center">
              <div>
                <div className="brdr w-25"></div>
                <h2 className="my-3">
                  Trending movies <br /> to watch <br /> Right now
                </h2>
                <div className="brdr"></div>
              </div>
            </div>
            {movies.firstData&&movies.firstData.map((movie) => (
              <div key={movie.id} className="col-md-2 my-2">
                <div className="content position-relative">
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                    alt=""
                    className="w-100"
                  />

                  <Link to={`/moviedetails/${movie.id}`}>
                    <div className="layout">
                      <p className="text-center px-2 text-white">
                        {movie.title}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    movie: () => dispatch(getDataMovie()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
