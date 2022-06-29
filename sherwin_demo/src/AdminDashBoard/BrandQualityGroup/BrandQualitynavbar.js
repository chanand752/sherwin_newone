import React, {useContext} from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import PersonIcon from '@mui/icons-material/Person';
import './BrandQuality.css';
import Grid from '@mui/material/Grid';
import Swlogo from '../images/sw-logo.png';



function BrandQualityNavbar() {


var userName = sessionStorage.getItem("loggedUser");

console.log(userName)

  return (
    <Grid container spacing={2}>
    <Grid item xs={12} md={12} sm={12}> 
    <div>
     

      <nav className='nav'>
        <div>
          <img src={Swlogo} className="nav-image" />
        </div>


        <Toolbar className='nav-content'>

          <Button variant="text" style={{ textTransform: 'none' }} >Dashboard</Button>
          <SpeedIcon />
          <Button variant="text" className='admin-button' style={{ textTransform: 'none',color:'#482db5' }} >{userName}</Button>
          <PersonIcon />
        </Toolbar>
      </nav>
     
    
      
    </div>
    </Grid>
    </Grid>
  );
}

export default BrandQualityNavbar;
