import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function MoviesDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  async function getDetails() {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f3ea600c6c90e26c27c2437692851c1e&language=en-US`
    );
    setDetails(data);
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [id]);
  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <div className="content-detail position-relative">
                <img
                  className="w-100  "
                  src={"https://image.tmdb.org/t/p/w500/" + details.poster_path}
                  alt=""
                />
                <div className="position-absolute top-0 start-0 px-2 py-3 bg-primary">
                  {details.vote_average && details.vote_average.toFixed(1)}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h2>{details.original_title}</h2>
              <p>{details.overview}</p>
              <h5>{details.release_date}</h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
