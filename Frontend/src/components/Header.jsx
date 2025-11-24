import Button from "./Button"
import {Link, useNavigate} from 'react-router-dom'
import {authContext} from './AuthProvider'
import { useContext, useState } from 'react'
function Header() {
    const {isLoggedIn,setIsLoggedIn}=useContext(authContext)
    const navigate = useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
        setIsLoggedIn(false)
        navigate('/login')
    }
    return (
        <div>
            <div className="px-20 navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Link to='/' className="text-2xl">Stock Prediction Portal</Link>
                </div>
                {isLoggedIn ? <button onClick={handleLogout} className="border-[1px] rounded-md bg-red-700 text-white px-1 py-1">Logout</button>:
            
                <div className="flex gap-2">
                    <Button text="Login" class="border-[1.5px] hover:bg-blue-500 hover:text-black font-semibold border-blue-500 px-1 py-1 rounded-sm" links='/login'/>
                    {/* <button className="">Login</button> */}
                    <Button text="Register" class="border-[1.5px] hover:bg-blue-500 hover:text-black font-semibold border-blue-500 px-1 py-1 rounded-sm" links='/register'>Register</Button>
                </div>
                } 
            </div>
        </div>
    )
}

export default Header