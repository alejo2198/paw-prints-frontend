import axios from 'axios';

//AXIOS UTIL FUNCTIONS
const baseURL = process.env.REACT_APP_BASE_URL;


//user api calls

export async function login(credentials) {
    try {
        const res = await axios.post(`${baseURL}/user/login`,credentials)
        return res;
    } catch {
        return "Failed to login";
    }
}

export async function signup(credentials) {
    try {
        const res = await axios.post(`${baseURL}/user/signup`,credentials)
        return res;
    } catch {
        return "Failed to sign up";
    }
}

//dog api calls

export async function createDog(dog_information) {
    try {
        const token = sessionStorage.getItem("token")
        console.log(dog_information)
        const res = await axios.post(`${baseURL}/doggo`,dog_information,{
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
                
            }
        })
        return res;
    } catch {
        return "Failed to create dog";
    }
}

export async function getDog() {
    try {
        const token = sessionStorage.getItem("token")
        const res = await axios.get(`${baseURL}/doggo`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch(error) {
        return "Failed to get dog by Id"+ `${error}`;
    }
}

export async function getMetrics() {
    try {
        const token = sessionStorage.getItem("token")
        const res = await axios.get(`${baseURL}/doggo/metrics`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch (error){
        return "Failed to get metrics"+ `${error}`;
    }
}

export async function incrementMetric(metric) {
    try {
        const token = sessionStorage.getItem("token")
        const res = await axios.put(`${baseURL}/doggo/metrics`,metric,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch {
        return "Failed to get dog by Id";
    }
}

//paw posts api calls

export async function getPosts() {
    try {
        const token = sessionStorage.getItem("token")
        const res = await axios.get(`${baseURL}/pawpost`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch(error) {
        return "Failed to get dog by Id" + `${error}`;
    }
}
export async function createPost(post_information) {
    try {
        const token = sessionStorage.getItem("token")
        const res = await axios.post(`${baseURL}/pawpost`,post_information,{
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.error)
        return res.data;
    } catch {
        return "Failed to get dog by Id";
    }
}
export async function getPostById(id) {
    try {
        const token = sessionStorage.getItem("token")
        const res = await axios.get(`${baseURL}/pawpost/${id}`,{
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch {
        return "Failed to get dog by Id";
    }
}
export async function editPost(post_information,id) {
    try {
        const token = sessionStorage.getItem("token")
        const res = await axios.put(`${baseURL}/pawpost/${id}`,post_information,{
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch {
        return "Failed to get dog by Id";
    }
}
export async function deletePost(id) {
    try {
        const token = sessionStorage.getItem("token")
        const res = await axios.delete(`${baseURL}/pawpost/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch {
        return "Failed to get dog by Id";
    }
}
