// action types
export const LOGIN = "Login"
export const LOGOUT = "Logout"
export const SIGNUP = "Signup"

// actions creator functions
export const login = () => {
  return {
    type : LOGIN
  }
}

export const logout = () => {
  return {
    type : LOGOUT
  }
}

export const signup = () => {
  return {
    type : SIGNUP
  }
}