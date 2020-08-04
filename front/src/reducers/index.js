const initialState = {
    sidebarShow: 'responsive',
    user_logged_in: false,
    username: '',
    userpassword: '',

}

const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest }
        case 'user_logged_in':
            return {
                ...state,
                user_logged_in: true,
                ...rest
            }
        default:
            return state
    }
}

export default changeState