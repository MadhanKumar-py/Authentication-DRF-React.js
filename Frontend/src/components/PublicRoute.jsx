import {useContext} from "react"
import {authContext} from './AuthProvider'
import {Navigate} from 'react-router-dom'
function PublicRoute({children}) {
    const {isLoggedIn} = useContext(authContext)
  return !isLoggedIn ? (
    children
  ):(
    <Navigate to="/dashboard"/>
  )
}

export default PublicRoute