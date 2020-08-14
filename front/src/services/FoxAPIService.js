const SERVER_ADDRESS = `${window.location.origin}/`

class FoxApiService {

    apiBase = `${SERVER_ADDRESS}api/`;

    async get(url) {
        const jwt = localStorage.getItem('token');
        const res = await fetch(url, {
            headers: jwt ? {
                'Authorization': `JWT ${jwt}`,
                'Accept': 'application/json',
            } : {
                    'Accept': 'application/json',
                }
        });
        if (!res.ok) {
            if (res.status >= 500) {
                throw new Error(`Could not fetch ${url}. recieved ${res.status}`);
            }
        }
        return res.json();
    }

    async post(url, data = {}) {
        const jwt = localStorage.getItem('token');
        const csrftoken = this.getCookie('csrftoken');
        const res = await fetch(url, {
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
            if (res.status >= 500) {
                throw new Error(`Could not fetch ${url}. recieved ${res.status}`);
            }
        }

        return { status: res.status, data: await res.json() };
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
