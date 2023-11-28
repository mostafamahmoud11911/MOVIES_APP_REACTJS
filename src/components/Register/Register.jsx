import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: 0,
  });
  const [error, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

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
        `https://movies-api.routemisr.com/signup`,
        user
      );
      if (data.message === "success") {
        setLoading(false);
        navigate("/login");
      } else {
        setLoading(false);
        setError(data.message);
      }
    }
  };



  function validationInputs() {
    const schema = Joi.object({
      first_name: Joi.string().min(3).max(9).required(),
      last_name: Joi.string().min(3).max(9).required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      age: Joi.number().max(85).min(16).required(),
    });

    return schema.validate(user, { abortEarly: false });
  }


  return (
    <>
      <div className="form">
        <h1>Register Now</h1>
        <form onSubmit={sendData}>
          {error && <p className="mb-3 text-danger">{error}</p>}
          <div className="mb-3">
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              placeholder="First name"
              onChange={getUser}
              id="firstName"
            />
            {errorList.map(error => error.path[0] === 'first_name' ? <div key={error.path[0]} className="alert alert-danger p-1 mt-1">{error.message}</div>  : null)}
          </div>
          <div className="mb-3">
            <label htmlFor="LastName">Last Name :</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              placeholder="Last name"
              onChange={getUser}
              id="LastName"
            />
            {errorList.map(error => error.path[0] === 'last_name' ? <div key={error.path[0]} className="alert alert-danger p-1 mt-1">{error.message}</div>  : null)}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={getUser}
              id="email"
            />
            {errorList.map(error => error.path[0] === 'email' ? <div key={error.path[0]} className="alert alert-danger p-1 mt-1">{error.message}</div>  : null)}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password :</label>
            <input
              type={showPass ? "text" : "password"}
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={getUser}
              id="password"
            />
                        <p
              onClick={() => setShowPass(!showPass)}
              className="text-primary float-end show-pass"
            >
              <i className="fa-solid fa-eye"></i>
            </p>
            {errorList.map(error => error.path[0] === 'password' ? <div key={error.path[0]} className="alert alert-danger p-1 mt-1">{error.message}</div>  : null)}
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age :</label>
            <input
              type="number"
              className="form-control"
              name="age"
              placeholder="Age"
              onChange={getUser}
              id="age"
            />
            {errorList.map(error => error.path[0] === 'age' ? <div key={error.path[0]} className="alert alert-danger p-1 mt-1">{error.message}</div>  : null)}
          </div>

          <button type="submit" className="btn btn-outline-primary">
            {loading ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
