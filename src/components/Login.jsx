import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      alert("Please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(
              login({
                email: auth.currentUser.email,
                uid: auth.currentUser.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          login({
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            profilePic: auth.currentUser.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="login">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
        alt=""
      />
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Full Name (required if registering)"
        />
        <input
          onChange={(e) => setProfilePic(e.target.value)}
          value={profilePic}
          type="text"
          placeholder="Profile picture URL (optional)"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span onClick={register} className="login__register">
          {" "}
          Regsiter Now
        </span>
      </p>
    </div>
  );
}

export default Login;
