import {LOGIN, LOGOUT, SIGNUP} from "../actions"
import { initialState } from "./initialState"

const isLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isLogin : true
        // 유저 정보를 payload 로 받아와서 userInfo 에 담아줘야 함.
      })
    case LOGOUT:
      return Object.assign({}, state, {
        isLogin : false,
        userInfo: { nickname: "" }
      })
    default:
      return state;
  }
};

export default isLoginReducer