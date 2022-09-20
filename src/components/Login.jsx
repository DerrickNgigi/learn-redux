import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/users";

function Login() {
  const dispatch = useDispatch();

  function createLogins() {
    dispatch(
      login({
        name: "John",
        email: "john@gmail.com",
        age: 25,
      })
    );
  }

  return (
    <div>
      <button onClick={createLogins}>Login</button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
