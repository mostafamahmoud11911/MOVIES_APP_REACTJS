import axios from "axios";
import Joi from "joi";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";


export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);

  function getUser(e) {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function sendData(e) {
    e.preventDefault();
    setLoading(true);
    const validationResult = validationInputs();
    if (validationResult.error) {
      setLoading(false);
      setErrorList(validationResult.error.details);
    } else {
      const { data } = await axios.post(
        `https://movies-api.routemisr.com/signin`,
        user
      );
      if (data.message === "success") {
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(data.token));
        signInUser();
        navigate("/");
      } else {
        setLoading(false);
        setError(data.message);
      }
    }
  }

  function validationInputs() {
    const schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });

    return schema.validate(user, { abortEarly: false });
  }
  return (
    <>
      <div className="form">
        <h1>Login now</h1>
        <form onSubmit={sendData}>
          {error && <p className="mb-3 text-danger">{error}</p>}
          <div className="mb-3">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={getUser}
            />
            {errorList.map((error) =>
              error.path[0] === "email" ? (
                <div
                  key={error.path[0]}
                  className="alert alert-danger p-1 mt-1"
                >
                  {error.message}
                </div>
              ) : null
            )}
          </div>
          <div className="mb-3 ">
            <label htmlFor="password">Password :</label>
            <input
              type={showPass ? "text" : "password"}
              className="form-control float-end"
              name="password"
              placeholder="Password"
              onChange={getUser}
            />
            <p
              onClick={() => setShowPass(!showPass)}
              className="text-primary float-end show-pass"
            >
              <i className="fa-solid fa-eye"></i>
            </p>
            <div className="clearfix"></div>
            {errorList.map((error) =>
              error.path[0] === "password" ? (
                <div
                  key={error.path[0]}
                  className="alert alert-danger p-1 mt-1"
                >
                  {error.message}
                </div>
              ) : null
            )}
          </div>

          <button type="submit" className="btn btn-outline-primary">
            {loading ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
