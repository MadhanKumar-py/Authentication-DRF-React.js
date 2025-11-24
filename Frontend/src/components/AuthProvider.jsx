import { createContext, useContext, useState } from "react"

const authContext=createContext()
function AuthProvider({children}) {
    const [isLoggedIn,setIsLoggedIn]=useState(
        !!localStorage.getItem('access')
    )

  return (
    <authContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
export {authContext}