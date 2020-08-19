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
import { getProjectList } from './projects'
import { getClientManagerList } from './client_managers'
import { getTemplateList } from './templates'
import { getContractorList } from './contractors'

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
    getDashboardLayout,
    getProjectList,
    getClientManagerList,
    getTemplateList,
    getContractorList
};