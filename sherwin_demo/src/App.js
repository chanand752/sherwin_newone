import './App.css';
import SwSideBar from './AdminDashBoard/sideBar';
import { Route, Switch } from 'react-router-dom'
import LoginForm from './LoginForm';

// import ProtectedRoute from './ProtectedRoute'

// import AdminPage from './AdminDashBoard/BrandQualityGroup/BrandQuality';



function App() {
  return (

    <>
    <Switch> 
     <Route exact path="/login" component={LoginForm} />
     {/* <ProtectedRoute exact path="/Home/brandqualitygroup" component={SwSideBar} /> */}
        <Route>
        <SwSideBar />
      </Route>
      </Switch>
      
      {/* <Switch>
      <Route exact path="/login" component={LoginForm} />
        <Route exact path="/" component={SwSideBar} />
      </Switch> */}
    </>
  );
}

export default App;
