import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function PeopleDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [seeMore, setSeeMore] = useState(true);

  async function getDetails() {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=f3ea600c6c90e26c27c2437692851c1e`
    );
    setDetails(data);
    setLoading(false);
  }
  console.log(seeMore);

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
              <div className="content-detail">
                <img
                  className="w-100  "
                  src={
                    "https://image.tmdb.org/t/p/w500/" + details.profile_path
                  }
                  alt=""
                />
              </div>
            </div>

            <div className="col-md-9 mt-2">
              <h2>{details.name}</h2>
              <div className="d-flex justify-content-between">
                <p>{seeMore? details.biography&&details.biography.substring(0,100): details.biography&&details.biography} </p>
                <p style={{cursor:'pointer'}} className="text-primary" onClick={() => setSeeMore(!seeMore)}>seeMore</p>
              </div>

              <h5>{details.birthday}</h5>
              <h6>{details.place_of_birth}</h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
