import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup"; //For Validation Schema
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { AuthContext } from "../context/auth-context";
//import { useContext } from "react";
const Login = () => {
  const navigate = useNavigate();
//   const authData = useContext(AuthContext);
  const [error, setError] = useState("hallo");
  const user = {
    email: "faraz@mern.com",
    password: "password123",
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    if (values.email === user.email && values.password === user.password) {
      setError("");
      //props.setUserData(values) //This line will save the user data alongwith navigation
      //authData.getData(values.email, values.password); //credentials data is passed to AuthContext
      navigate("/");
    } else setError("Wrong Credentials!");
  };

  const validationSchema = Yup.object().shape({
    //For Exception Handeling
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
  });
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample Login"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
               {(props) =>(<Form> 
                {error &&<h6 className="text-warning text center">{error}</h6>}
                <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label> 
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    name="email"
                    value={props.values.email}
                    onChange={props.handleChange}
                    className={`form-control ${props.errors.password && 'is-invalid'}`}
                    placeholder="Enter email address"
                  /> 
                </div>
                <div className="invalid-field">{props.errors.email}</div>
                <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    name="password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    // "form-control form-control-lg is-invalid"
                    className={`form-control form-control-lg ${props.errors.password && 'is-invalid'}`}
                    placeholder="Enter password"
                  />              
                </div>
                <div className="invalid-field">{props.errors.password}</div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg login-style"
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </Form>)}
                </Formik>
              
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>

          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
