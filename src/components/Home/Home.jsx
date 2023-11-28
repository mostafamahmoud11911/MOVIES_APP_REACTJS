import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataMovie,
  getDataPeople,
  getDataTvShow,
} from "../../redux/action/action";
import Loading from "../Loading/Loading";


export default function Home() {
  const data = useSelector((x) => x);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataMovie());
    dispatch(getDataTvShow());
    dispatch(getDataPeople());
  }, [getDataMovie, getDataTvShow, getDataPeople]);

  return (
    <>
      {data.loading && <Loading />}

      {!data.loading && (
        <>
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
              {data.firstData &&
                data.firstData.map((movie) => (
                  <div key={movie.id} className="col-md-2 my-2">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                        }
                        alt=""
                        className="w-100"
                      />
                  </div>
                ))}
            </div>
          </div>

          <div className="container">
            <div className="row my-5">
              <div className="col-md-4 d-flex align-items-center">
                <div>
                  <div className="brdr w-25"></div>
                  <h1 className="my-3">
                    Trending series <br /> to watch <br /> Right now
                  </h1>
                  <div className="brdr"></div>
                </div>
              </div>
              {data.secondData &&
                data.secondData.map((movie) => (
                  <div key={movie.id} className="col-md-2 my-2">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                      }
                      alt=""
                      className="w-100"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center">
                <div>
                  <div className="brdr w-25"></div>
                  <h2 className="my-3">
                    Trending people <br /> to watch <br /> Right now
                  </h2>
                  <div className="brdr"></div>
                </div>
              </div>
              {data.thirdData &&
                data.thirdData.map((movie) => (
                  <div key={movie.id} className="col-md-2 my-2">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie.profile_path
                      }
                      alt=""
                      className="w-100"
                    />
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
