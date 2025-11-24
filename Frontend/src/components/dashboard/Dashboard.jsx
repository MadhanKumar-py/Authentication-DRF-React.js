import { useEffect } from "react"
import axios from 'axios'
import axiosInstance from "../../axiosInstance"

function Dashboard() {
  const accessToken = localStorage.getItem('access')
  useEffect(()=>{
    const fetchProtectedData =async ()=>{
      try{
        const response= await axiosInstance.get('/protected_view/')
        console.log("successfully",response.data)
      }catch(error){
        console.log("Failed",error)
      }
    }
    fetchProtectedData()
  },[])
  return (
   <button  className="bg-red-500">Dashboard</button>
  )
}

export default Dashboard