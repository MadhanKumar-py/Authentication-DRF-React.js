import axios from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
    baseURL: baseURL
})

axiosInstance.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('access')
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)
axiosInstance.interceptors.response.use(
    function(response){
        return response
    },
    async function(error){
        const originalRequest=error.config;
        if(originalRequest && !originalRequest.retry){
            originalRequest.retry=true
            const refreshToken=localStorage.getItem('refresh')
            console.log('ref',refreshToken)
            try{
                const response=await axiosInstance.post("/token/refresh/",{refresh:refreshToken} )
                console.log('access token===>',response.data.access)
                localStorage.setItem('access',response.data.access)
                originalRequest.headers['Authorization']=`Bearer ${response.data.access}`
                return axiosInstance(originalRequest)
            }catch(error){
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
                // window.location.href='/login'
                console.log('everything failed')
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance