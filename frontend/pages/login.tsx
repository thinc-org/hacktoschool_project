import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import SignupStyle from "../styles/signup.module.css";

type State = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
};

const initialState: State = {
  username: "",
  password: "",
  isButtonDisabled: true,
};

type Action =
  | { type: "setUsername"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setIsButtonDisabled"; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setUsername":
      return {
        ...state,
        username: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    case "setIsButtonDisabled":
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
  }
};

export default function Login(this: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      });
    }
  }, [state.username, state.password]);

  const handleLogin = async () => {
    console.log("HANDLING");
    // susu naaaa tum mai pen leaw
    try {
      // console.log(state.username);
      // console.log(state.password);
      const found = await axios.post(
        "http://localhost:4000/users/checkUserExist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: {
            username: state.username,
            password: state.password,
          },
        }
      );

      if (found.data) {
        //alert("username already exists!");
      } else {
        alert("Not Found");
        return;
      }
    } catch (error) {
      alert("Unable to check if the username is already exists or not");
      return;
    }

    try {
      // susu naa~~~
      const res = await axios.post("http://localhost:4000/users/checkLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          username: state.username,
          password: state.password,
        },
      });

      if (res.status === 403) {
        console.log(res.data);
      } else if (res.status === 200) {
        const token = res.data;
        localStorage.setItem("token", token);
        alert("Login successfully");
      }
    } catch (error) {
      alert("Login Failed");
      console.log(error);
      return;
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  return (
    <div className={SignupStyle.page}>
      <div className={SignupStyle.questionholder}>
        <div className={SignupStyle.logo}>GlobalTalk</div>
        <div className={SignupStyle.question}>
          Username
          <input
            type="text"
            name="username"
            placeholder="username"
            className={SignupStyle.textinput}
            onChange={handleUsernameChange}
          />
        </div>
        <div className={SignupStyle.question}>
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
            className={SignupStyle.textinput}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={SignupStyle.submit}>
          <button
            className={SignupStyle.btn}
            onClick={handleLogin}
            disabled={state.isButtonDisabled}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
