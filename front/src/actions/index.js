import {
    userLoginFetch,
    getProfileFetch,
    logoutUser,
    userRegisterFetch,
    userRegisterValidationFetch,
    registerError,
    allowRegistration
} from './auth'

import getDashboardLayout from './dashboard'

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
    userRegisterValidationFetch,
    registerError,
    allowRegistration,
    getDashboardLayout
};