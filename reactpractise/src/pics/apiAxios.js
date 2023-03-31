import axios from 'axios';
const apiAxios = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:
        {
            Authorization: 'Client-ID 1d93040c955c0ea041361ec93593cc093ec3e7e8ee617f677aa27c6060e99306',
        },
        params: {
            query: term,
        },
    });
    console.log(response);
    return response.data.results;
}

export default apiAxios;