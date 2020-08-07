const initialState = {
    sidebarShow: 'responsive',
    currentUser: {},
    loginError: false
}

const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest }
        case 'LOGIN_USER':
            return { ...state, ...rest }
        case 'LOGOUT_USER':
            return { ...state, currentUser: {} }
        case 'LOGIN_ERROR':
            return { ...state, ...rest }
        default:
            return state
    }
}

export default changeState
