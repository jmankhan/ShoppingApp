const axios = require('axios')

const search = (search_term) => {
    return axios.get(`/search?search_term=${search_term}`)
                .then(res => res.data)
                .catch(err => alert(err.response.statusText));
}

export {
    search
}