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
import { getDocumentList } from './documents'
import { getContractorList } from './contractors'
import { getWorkerList } from './workers'

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
    getDocumentList,
    getContractorList,
    getWorkerList
};