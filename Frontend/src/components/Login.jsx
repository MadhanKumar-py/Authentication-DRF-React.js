import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { authContext } from './AuthProvider'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState()
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState()
    const navigate = useNavigate()

    const { isLoggedIn, setIsLoggedIn } = useContext(authContext)
    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        const userData = {
            username, password
        }
        console.log(userData)
        try {
            const response = await axios.post("http://127.0.0.1:8000/accounts/token/", userData)
            localStorage.setItem('access', response.data.access)
            localStorage.setItem('refresh', response.data.refresh)

            setSuccess(true)
            setErrors()
            navigate('/')
            setIsLoggedIn(true)
            console.log(isLoggedIn)
        } catch (error) {
            setErrors("Invalid credentials")
        } finally {
            setLoading(false)
        }


    }


    return (
        <div className='min-h-[80vh] flex justify-center items-center'>
            <div className='shadow-md rounded-lg shadow-gray-700/50 text-center p-8 bg-gray-900'>
                <h1 className='text-2xl '>Login</h1>
                <form onSubmit={handleLogin} className='flex flex-col my-3' action="">
                    <div className='my-2'>
                        <input className='w-90 h-12 focus:outline-0 border-1 p-2 rounded-md' type="text" placeholder='Enter Your Name' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='my-2'>
                        <input className='w-90 h-12 focus:outline-0 border-1 p-2 rounded-md' type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {errors && <div className='self-start text-sm text-red-600'>{errors}</div>}
                    {loading ? <input className='mt-2 border-1 self-center px-3 py-1 rounded-mdfont-semibold ' type="submit" value="Logging wait" disabled /> :
                        <input className='mt-2 border-1 self-center px-3 py-1 rounded-md hover:bg-green-400 hover:text-black font-semibold hover:border-green-300' type="submit" value="submit" />}
                    {success && <div className='py-3 text-lg bg-gray-600 text-green-400 mt-2'>Login Successfully</div>}

                </form>
            </div>
        </div>
    )
}

export default Login