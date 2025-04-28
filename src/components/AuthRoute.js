import { Navigate } from "react-router-dom"
function AuthRoute({ children }) {
    return <Navigate to={'/login'}/>
}

export default AuthRoute