const SERVER_ADDRESS = `${window.location.origin}/`

class FoxApiService {

    apiBase = `${SERVER_ADDRESS}api/`

    async getResource(url) {
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

    async postResource(url, data = {}) {
        jwt = localStorage.getItem('token')
        const csrftoken = getCookie('csrftoken');
        const res = await fetch(ulr, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: jwt ? {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${jwt}`,
                'X-CSRFToken': csrftoken ? csrftoken : '',
                'Accept': 'application/json',
            } : {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken ? csrftoken : '',
                    'Accept': 'application/json',
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

    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}

export default FoxApiService
