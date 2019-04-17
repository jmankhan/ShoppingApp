const axios = require('axios');

const search = (search_term, zipcode) => {
    return axios.get(`/search?search_term=${search_term}&zipcode=${zipcode}`)
        .then(res => res.data)
        .catch(err => alert(err.response.statusText));
};

export {
    search
}