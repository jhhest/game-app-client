import { LOGIN_SUCCES } from "../users/actions";
import { SIGNUP_SUCCES } from "../users/actions"

const initialState = {
  users: [],
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCES:
      //   console.log("called type: ", type);
      //   console.log("called payload: ", payload);
      //   const result = { ...state, ...payload };
      //   result.user = { payload }
      return { ...state, user: { ...payload } };
    case SIGNUP_SUCCES:
      console.log("is reducer called?s", payload);
      
      return { ...state, user: { ...payload } }
    default:
      return state;
  }
};
