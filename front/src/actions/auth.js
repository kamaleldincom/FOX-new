const SERVER_ADDRESS = `${window.location.origin}`;

const userLoginFetch = user => {
    return dispatch => {
        let data = JSON.stringify(user);
        return fetch(`${SERVER_ADDRESS}/api/token-auth/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: data
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    dispatch(loginUser(data.user));
                } else {
                    dispatch(loginError());
                    console.warn(data);
                }
            }).catch(function (error) {
                console.error(error);
            })
    }
}

const getProfileFetch = () => {
    return dispatch => {
        const token = localStorage.token;
        if (token) {
            return fetch(`${SERVER_ADDRESS}/api/current_user/`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `JWT ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.detail) {
                        console.log(data.detail)
                        localStorage.removeItem("token")
                    } else {
                        dispatch(loginUser(data))
                    }
                })
        }
    }
}


const loginUser = userObj => ({
    type: 'LOGIN_USER',
    currentUser: userObj,
    loginError: false
})

const loginError = () => ({
    type: 'LOGIN_ERROR',
    loginError: true
})

const logoutUser = () => ({
    type: 'LOGOUT_USER'
})

export { userLoginFetch, getProfileFetch, logoutUser }
