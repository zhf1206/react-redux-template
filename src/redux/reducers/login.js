/**
 * login state
 */
const defaultState = {
  token: '',
  user: '',
  msg: ''
}
export const loginApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return [
        ...state,
        {
          token: action.user.id,
          user: action.user
        }
      ]
    default:
      return state
  }
}