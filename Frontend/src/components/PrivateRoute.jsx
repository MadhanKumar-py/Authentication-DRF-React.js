import {useContext} from "react"
import {authContext} from './AuthProvider'
import {Navigate} from 'react-router-dom'
function PrivateRoute({children}) {
    const {isLoggedIn} = useContext(authContext)
  return isLoggedIn ? (
    children
  ) :(
    <Navigate to="/login" />
  )
}

export default PrivateRoute