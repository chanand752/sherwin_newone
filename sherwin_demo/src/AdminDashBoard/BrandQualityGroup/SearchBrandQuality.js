// In Search Brand Quality
import React from 'react';
import { useState, useEffect, memo } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import axios from 'axios';
import { TextField, TableCell, TableBody, Table, TableRow, TableContainer, TableHead, Paper, tableCellClasses, styled, Alert, Stack, MuiAlert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar, IconButton, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import './BrandQuality.css';


function SearchBrandQuality() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = React.useState(false);

  ///////////////////////////////////////////////////////////

  const [description, setCreateDiscription] = React.useState(null)
  const [code, setCreateCode] = React.useState()
  const [state, setState] = useState()
  const [data, setData] = React.useState([])
  const [loading, setLoading] = useState(false)





  // delete dialogo method code

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  ////////////////////////////////////////////////////////////////////////////

  // const handleClick1 = () => {
  //   setOpen1(true)
  // };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose1}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose1}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  //////////////////////////////////////////////////////////////

  const handleClickOpen = () => {
    setOpen(true);
    console.log("open");
  };

  const handleClose = () => {
    setOpen(false);
    console.log("closed");


  };
  // post Method

  const handleCreate = () => {
    setOpen(false);
    const article = { code, description };
    axios.post('http://172.17.12.112:3000/data/createqualitygroup', article)
      .then(res => {
        console.log(res)
        setState(res.article);
      })
      .catch(err => {
        console.log(err)
      })
    console.log('Created')
    // window.location.reload(false);
  }


  //Table

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,

    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  // function createData(code, discription, brand) {
  //   return { code, discription, brand };
  // }

  const handleDelete = (code, e) => {
    e.preventDefault();
  
    axios.delete(`http://172.17.12.112:3000/data/deletedataa`, {"data" : { "code" : code }}).then(
      res => console.log("Deleted!!!", res)
    ).catch(
      err => console.log(err)
    )
    // console.log('deleted');
    // window.location.reload(false);
    setOpen1(true)
    setOpen2(false)
    
  }


  // const rows = [
  //   createData('AD1411', 'AD1411 LAQVIN PRIME', 'Sherwin-Williams Product Finishes Europe'),
  //   createData('AFL31', 'AFL31 HYDROPLUS SELF SEALER', 'Sherwin-Williams Product Finishes Europe'),
  //   createData('AD1430', 'AD1430 LAQVIN PRIME', 'Sherwin-Williams Product Finishes Europe'),
  //   createData('AF72', 'AF72 HYDRO WATERBORNE CLEAR SELF-SEALER FOR INTERIORS', 'Sherwin-Williams Product Finishes Europe'),
  //   createData('AF74', 'AF74 HYDRO WATERBORNE CLEAR SELF-SEALER FOR INTERIORS', 'Sherwin-Williams Product Finishes Europe'),
  // ];






  function loader() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }


  useEffect(() => {
    axios.get("http://172.17.12.112:3000/data/getdata", {
      headers: {
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
      }
    }
    )
      .then(res => {
        console.log(res.data);
        setData(res.data)
        loader();
      })

  }, []);


  function handleInputChange1(event) {
    setCreateCode(event.target.value);
  }

  function handleInputChange2(event) {
    setCreateDiscription(event.target.value);
  }


  // function createBrand() {
  //   alert(" " +  + " is selected for Updating")

  //   axios.put(`http://172.17.12.42:4231/books/bookupdate`, { "":  }).then(
  //     res => console.log("Updated!!!", res)
  //   ).catch(
  //     err => console.log(err)
  //   )

  // }


  // function deleteBrand(code, e) {
  //   alert("Brand " + code + " is selected for Delete")
  //   e.preventDefault();

  //   axios.delete(`http://172.17.12.42:4231/books/detailsdelete`, { "data": { "code": code } }).then(
  //     res => console.log("Deleted!!!", res)
  //   ).catch(
  //     err => console.log(err)
  //   )
  //   Showbook(updateData);
  // }









  const [search, setSearch] = React.useState('');
  const searchBycode = data.filter(a => a.description.toLowerCase().includes(search.toLowerCase()) || a.code.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='body-brand-quality'>
      <p className='title'><b>Available Brand Quality Groups</b></p>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <div>
          <SearchIcon className='icon' /><TextField id="standard-basic" label="Search By Discription or Code" variant="standard" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        {/* <Button variant="contained" color="success" className='add-button' >Create New Quality Group</Button> */}
        <Button variant="contained" onClick={handleClickOpen} color="success"  >Create New Quality Group</Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Create New Quality Group</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="code"
              label="Quality Group Code*"
              fullWidth
              variant="standard"
              name='code'
              value={code}
              onChange={handleInputChange1}

            />

            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description*"
              fullWidth
              variant="standard"
              name='description'
              value={description}
              onChange={handleInputChange2}
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={handleCreate} >Create</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>

      </Box>

      <div className='body-down'>

        <div className='table-cont'>
          <TableContainer  >

            <Table  >

              <TableHead >
                <TableRow >
                  <StyledTableCell>Code</StyledTableCell>
                  <StyledTableCell align="left">Discription</StyledTableCell>
                  <StyledTableCell align="left">Brand</StyledTableCell>
                  <StyledTableCell align="center">Delete</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {
                  searchBycode.map((data, code) =>
                    <StyledTableRow key={code}  >
                      <StyledTableCell component="th" scope="row"  >
                        <b className='table-code'>{data.code}</b>
                      </StyledTableCell>
                      <StyledTableCell align="left"><b>{data.description}</b></StyledTableCell>
                      <StyledTableCell align="left"><b>{data.brand}</b></StyledTableCell>
                      <StyledTableCell align="center">
                        <Button variant="contained" color="success" className='Button-delete' onClick={handleClickOpen2} ><DeleteIcon /></Button>
                        {/* onClick={e => handleDelete(code, e)} */}
                        <div>
                          {/* <Button variant="outlined" onClick={handleClickOpen2}>
                            Open alert dialog
                          </Button> */}
                          <Dialog
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Are You Sure Delete This Brand Row ?"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">

                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose2}>No</Button>
                              <Button onClick={e => handleDelete(data.code, e)}>
                                Yes
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {open1 === true &&
          //     <Snackbar>  
          //       open={open1}
          //       autoHideDuration={3000}
          //       onClose={handleClose1}
          //       {/* message="Deleted Succesfully" */}
          //       <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>
          //   This is a success message!
          // </Alert>

          //       </Snackbar>
          <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
            <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }} className="alert-messsage" >
              Deleted successfully!
            </Alert>
          </Snackbar>
        }
      </div>

    </div>
  );
}

export default memo (SearchBrandQuality);

