import React from "react";
import "./SocialLogin.css";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../SharedPages/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>
  }
  
  if (error || error1) {
    errorElement =
      <p className="text-danger">
          Error: {error?.message} {error1?.message}
        </p>
   }

  if (user || user1) {
    navigate("/home");
  }

  return (
    <div className="text-center">
      <div className="d-flex align-items-center w-50 mx-auto d-block">
        <div
          style={{ height: "2px" }}
          className="bg-success w-25 opacity-25"
        ></div>
        <div className="px-2">or</div>
        <div
          style={{ height: "2px" }}
          className="bg-success w-25 opacity-25"
        ></div>
      </div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-success mx-auto w-50 mt-3"
      >
        <img src={google} alt="" />
        <span className="px-2">Google sign in</span>
      </button>
      <br />
      <button className="btn btn-success mx-auto w-50 mt-3">
        <img style={{ width: "30px" }} src={facebook} alt="" />
        <span className="px-2">Facebook sign in</span>
      </button>
      <br />
      <button
        onClick={() => signInWithGithub()}
        className="btn btn-success mx-auto w-50 mt-3"
      >
        <img src={github} alt="" />
        <span className="px-2">Github sign in</span>
      </button>
    </div>
  );
};

export default SocialLogin;
