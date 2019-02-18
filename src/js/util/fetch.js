import axios from 'axios';

export default function fetch(obj) {
	return axios(obj)
		.then(response => ({ response: response.data }))
		.catch(error => ({ error: error.response ? error.response.data : error }));
}
