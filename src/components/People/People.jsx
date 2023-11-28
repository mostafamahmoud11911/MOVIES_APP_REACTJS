import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataPeople } from "../../redux/action/action";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function People() {
  const data = useSelector((data) => data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataPeople());
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
                <h2 className="my-3">
                  Trending people <br /> to watch <br /> Right now
                </h2>
                <div className="brdr"></div>
              </div>
            </div>
            {data.thirdData &&
              data.thirdData.map((peron) => (
                <div key={peron.id} className="col-md-2 my-2">
                  <div className="content position-relative">
                    <img
                      src={"https://image.tmdb.org/t/p/w500/" + peron.profile_path}
                      alt=""
                      className="w-100"
                    />

                    <Link to={`/persondetails/${peron.id}`}>
                      <div className="layout">
                        <p className="text-center px-2 text-white">{peron.name}</p>
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
