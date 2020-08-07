const SERVER_ADDRESS = `${window.location.origin}/`

class FoxApiService {

    _apiBase = `${SERVER_ADDRESS}api/`

    async _getResource(url) {
        jwt = localStorage.getItem('token')
        const res = await fetch(url, {
            headers: {
                'Authorization': jwt ? `JWT ${jwt}` : ''
            }
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}. recieved ${res.status}`)
        }

        return await res.json()
    }

    async _postResource(url, data = {}) {
        jwt = localStorage.getItem('token')
        const res = await fetch(ulr, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': jwt ? `JWT ${jwt}` : ''
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}. recieved ${res.status}`)
        }

        return await res.json()
    }

    verifyUser() {
        if (this.state.logged_in) {


            FoxApiService._getResource(url = `${FoxApiService._apiBase}verify-user`)
                .then(resp => {
                    this.setState({ username: resp.username })  // EDIT TO WRITWE TO REDUX STATE 
                })
                .catch(err => console.log(err));
        }
    }
}

export default FoxApiService
