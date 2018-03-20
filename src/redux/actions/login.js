const USER_LOGIN = 'USER_LOGIN';


export function login(user) {
  return {
    type: USER_LOGIN,
    user
  }
}