import axios from "axios";
import { stat } from "fs";
import { useEffect, useReducer } from "react";
import SignupStyle from "../styles/signup.module.css";

type State = {
  nickname: string;
  firstname: string;
  lastname: string;
  isInstructor: boolean;
  desc: string;
  username: string;
  password: string;
  isButtonDisabled: boolean;
};

const initialState: State = {
  nickname: "",
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  desc: "",
  isInstructor: false,
  isButtonDisabled: true,
};

type Action =
  | { type: "setNickname"; payload: string }
  | { type: "setFirstname"; payload: string }
  | { type: "setLastname"; payload: string }
  | { type: "setUsername"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setDesc"; payload: string }
  | { type: "setIsInstructor"; payload: boolean }
  | { type: "setIsButtonDisabled"; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setNickname":
      return {
        ...state,
        nickname: action.payload,
      };
    case "setFirstname":
      return {
        ...state,
        firstname: action.payload,
      };
    case "setLastname":
      return {
        ...state,
        lastname: action.payload,
      };
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
    case "setDesc":
      return {
        ...state,
        desc: action.payload,
      };
    case "setIsInstructor":
      return {
        ...state,
        isInstructor: action.payload,
      };
    case "setIsButtonDisabled":
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
  }
};

export default function Signup(this: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (
      state.nickname.trim() &&
      state.firstname.trim() &&
      state.lastname.trim() &&
      state.desc.trim() &&
      state.username.trim() &&
      state.password.trim()
    ) {
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
  }, [
    state.nickname,
    state.firstname,
    state.lastname,
    state.desc,
    state.username,
    state.password,
  ]);

  const handleSignup = async () => {
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
      //console.log(found.data);

      if (found.data) {
        console.log("username already exists!");
        return;
      } else {
        console.log("Not Found");
      }
    } catch (error) {
      console.log("Unable to check if the username is already exists or not");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/users/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          username: state.username,
          password: state.password,
          nickname: state.nickname,
          firstname: state.firstname,
          lastname: state.lastname,
          description: state.desc,
          role: state.isInstructor ? "Instructore" : "Student",
          imageURL: "",
          coursesId: [],
        },
      });
      console.log("Sign Up Completed!");
      console.log(res);
      return;
    } catch (error) {
      console.log("create User failed");
      console.log(error);
      return;
    }
  };

  const handleNicknameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setNickname",
      payload: event.target.value,
    });
  };

  const handleFirstnameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setFirstname",
      payload: event.target.value,
    });
  };

  const handleLastnameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setLastname",
      payload: event.target.value,
    });
  };

  const handleIsInstructorChange: React.ChangeEventHandler<
    HTMLInputElement
  > = () => {
    dispatch({
      type: "setIsInstructor",
      payload: !state.isInstructor,
    });
  };

  const handleDescChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setDesc",
      payload: event.target.value,
    });
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
          Nickname
          <input
            type="text"
            name="nickname"
            placeholder="Erk"
            className={SignupStyle.textinput}
            onChange={handleNicknameChange}
          />
        </div>
        <div className={SignupStyle.question}>
          First name
          <input
            type="text"
            name="firstname"
            placeholder="Chrrissa"
            className={SignupStyle.textinput}
            onChange={handleFirstnameChange}
          />
        </div>
        <div className={SignupStyle.question}>
          Last name
          <input
            type="text"
            name="lastname"
            placeholder="Chotjirasathit"
            className={SignupStyle.textinput}
            onChange={handleLastnameChange}
          />
        </div>
        <div className={SignupStyle.question} id={SignupStyle.askinstructor}>
          R U an Instructor?
          <input
            type="checkbox"
            name="isInstructor"
            className={SignupStyle.checkboxinput}
            onChange={handleIsInstructorChange}
          />
        </div>
        <div className={SignupStyle.question}>
          Description
          <input
            type="text"
            name="desc"
            placeholder="B Blood Type"
            className={SignupStyle.textinput}
            onChange={handleDescChange}
          />
        </div>
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
            onClick={handleSignup}
            disabled={state.isButtonDisabled}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
