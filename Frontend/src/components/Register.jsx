import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios' 
function Register() {
  const [username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[errors,setErrors] = useState({})
  const[success,setSuccess]=useState(false)
  const[loading,setLoading] = useState()

  const handleRegistration =async(e)=>{
    e.preventDefault()
    setLoading(true)
    const userData={
      username,email,password
    }
    try{
      const response = await axios.post("http://127.0.0.1:8000/accounts/register/",userData)
      console.log(response.data)
      setErrors({})
      setSuccess(true)
      
    }catch(error){
      setErrors(error.response.data)
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <div className='min-h-[80vh] flex justify-center items-center'>
      <div className='shadow-md rounded-lg shadow-gray-700/50 text-center p-8 bg-gray-900'>
        <h1 className='text-2xl '>Create Free Account</h1>
        <form onSubmit={handleRegistration} className='flex flex-col my-3' action="">
          <div className='my-2'>
          <input className='w-90 h-12 focus:outline-0 border-1 p-2 rounded-md' type="text" placeholder='Enter Your Name' value={username} onChange={(e)=>setUsername(e.target.value)} />
          {errors.username && <div className='self-start w-fit text-red-700 text-sm'>{errors.username}</div>}
          </div>
          <input className='w-90 h-12 my-2 focus:outline-0 border-1 p-2 rounded-md' type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <div className='my-2'>
          <input className='w-90 h-12 focus:outline-0 border-1 p-2 rounded-md' type="password" placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
          {errors.password && <div className='self-start w-fit text-red-700 text-sm'>{errors.password}</div>}
          </div>
          {loading ? <input className='mt-2 border-1 self-center px-3 py-1 rounded-mdfont-semibold ' type="submit" value="Loading wait" disabled /> :
          <input className='mt-2 border-1 self-center px-3 py-1 rounded-md hover:bg-green-400 hover:text-black font-semibold hover:border-green-300' type="submit" value="submit"/>}
          {success && <div className='py-3 text-lg bg-gray-600 text-green-400 mt-2'>Registered Successfully</div>}
          
        </form>
      </div>
    </div>
  )
}

export default Register