import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    withXSRFToken: true,
});

// axios.interceptors.response.use(null, (err) => console.log(err))