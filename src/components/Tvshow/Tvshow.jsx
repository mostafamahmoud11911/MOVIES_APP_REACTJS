import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataTvShow } from "../../redux/action/action";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function Tvshow() {
  const data = useSelector((data) => data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataTvShow());
  }, []);

  return (
    <>
      {data.loading && <Loading />}

      {!data.loading && (
        <div className="container">
          <div className="row">
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
              data.secondData.map((tv) => (
                <div key={tv.id} className="col-md-2 my-2">
                <div className="content position-relative">
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path}
                    alt=""
                    className="w-100"
                  />

                  <Link to={`/tvdetails/${tv.id}`}>
                    <div className="layout">
                      <p className="text-center px-2 text-white">
                        {tv.name}
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
