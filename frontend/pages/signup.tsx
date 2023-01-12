import { useEffect, useReducer } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import PagesStyle from "../styles/pages.module.css";
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
  helperText: string;
  isError: boolean;
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
  helperText: "",
  isError: false,
};

type Action =
  | { type: "setNickname"; payload: string }
  | { type: "setFirstname"; payload: string }
  | { type: "setLastname"; payload: string }
  | { type: "setUsername"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setDesc"; payload: string }
  | { type: "setIsInstructor"; payload: boolean }
  | { type: "setIsButtonDisabled"; payload: boolean }
  | { type: "loginSuccess"; payload: string }
  | { type: "loginFailed"; payload: string }
  | { type: "setIsError"; payload: boolean };

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
    case "loginSuccess":
      return {
        ...state,
        helperText: action.payload,
        isError: false,
      };
    case "loginFailed":
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case "setIsError":
      return {
        ...state,
        isError: action.payload,
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

  const handleSignup = () => {
    // susu naaaa tum mai pen leaw
    console.log(state.username);
    console.log(state.password);
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
    <div className={PagesStyle.pages}>
      <Header></Header>
      <form>
        <input
          type="text"
          name="nickname"
          placeholder="nickname"
          onChange={handleNicknameChange}
        />
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          onChange={handleFirstnameChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          onChange={handleLastnameChange}
        />
        <br />
        <input
          type="checkbox"
          name="isInstructor"
          onChange={handleIsInstructorChange}
        />
        R U an Instructor?
        <input
          type="text"
          name="desc"
          placeholder="desc"
          onChange={handleDescChange}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <button
          className={SignupStyle.btn}
          onClick={handleSignup}
          disabled={state.isButtonDisabled}
        >
          Sign Up
        </button>
      </form>
      <Footer></Footer>
    </div>
  );
}
