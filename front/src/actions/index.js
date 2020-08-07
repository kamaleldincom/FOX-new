import { userLoginFetch, getProfileFetch, logoutUser } from './auth'

const userLoggedIn = () => {
    return {
        type: 'user_logged_in',
    }
};

export {
    userLoggedIn,
    userLoginFetch,
    getProfileFetch,
    logoutUser
};