import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
  import { Container, Col, Row } from 'react-bootstrap';
  import BrandQualityNavbar from './BrandQualityGroup/BrandQualitynavbar';
  import AdminPage from './BrandQualityGroup/BrandQuality';
  import PriceList from './PriceList';
  import PriceGrid from './PriceGrid';
  import { Switch, Route } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute';
import Grid from '@mui/material/Grid';
  // import { Navbar, Nav, Offcanvas } from "react-bootstrap";


export default function SwSideBar() {

  const onClickLogout = () => {
    sessionStorage.removeItem('jwt_token')
    sessionStorage.removeItem('loggedUser')
  }

  return (
    <Grid container columns={{ xs: 12, md: 12, }}>
    <Grid item xs={12} md={12} sm={12}> 
    <div>
      <BrandQualityNavbar  />
   
   <div style={{
                  padding: '0px ',
                }}>
    <Container fluid>
      <Row >
        <Col lg="auto" className='col-side' style={{
                  padding: '0px',
                  // height:'91vh',
                  height:'100vh'
                }}>
          <CDBSidebar textColor="#000000" backgroundColor="rgb(128, 204, 255)">
          {/* <CDBSidebar textColor="#fff" backgroundColor="#2F2F2F" > */}
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                className="text-decoration-none"
                style={{ color: 'inherit' }}
              >
                Menu
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/Home/brandqualitygroup" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="sign">Brand Quality Group</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Home/pricelist" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="list">Price List</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Home/pricegrid" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table"> Price Grid</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/login"  activeClassName="activeClicked"  onClick={onClickLogout} >
                <CDBSidebarMenuItem icon="chart-line"> Logout</CDBSidebarMenuItem>
                </NavLink>
                
              </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                style={{
                  padding: '20px 5px',
                }}
              >
                {/* Miracle Software Systems */}
                @Sherwin Williams
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </Col>


        <Col >

          <Switch>
          {/* <ProtectedRoute  path="/Home/brandqualitygroup" ><AdminPage /> </ProtectedRoute >
            <Route path="/Home/pricelist" ><PriceList /></Route>
            <Route path="/Home/pricegrid" ><PriceGrid /></Route> */}

            <ProtectedRoute exact path="/Home/brandqualitygroup" ><AdminPage /> </ProtectedRoute >
            <ProtectedRoute exact path="/Home/pricelist" ><PriceList /></ProtectedRoute >
            <ProtectedRoute exact path="/Home/pricegrid" ><PriceGrid /></ProtectedRoute >
          </Switch>

        </Col>

      </Row>
    </Container>
    </div>
    </div>
    </Grid>
    </Grid>
  )
}