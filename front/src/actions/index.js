import { userLoginFetch, getProfileFetch, logoutUser, userRegisterFetch, userRegisterValidationFetch } from './auth'

const userLoggedIn = () => {
    return {
        type: 'user_logged_in',
    }
};

export {
    userLoggedIn,
    userLoginFetch,
    getProfileFetch,
    logoutUser,
    userRegisterFetch,
    userRegisterValidationFetch
};