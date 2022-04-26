import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const msg = "Username or password is incorrect!"
  if (msg !== msg ) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
