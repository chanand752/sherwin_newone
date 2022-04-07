// In Search Brand Quality
import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { TextField, TableCell, TableBody, Table, TableRow, TableContainer, TableHead, Paper, tableCellClasses, styled, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './BrandQuality.css;

export default function SearchBrandQuality() {
  const [open, setOpen] = React.useState(false);
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
  const handleCreate = () => {
    setOpen(false);
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

  function createData(code, discription, brand, carbs) {
    return { code, discription, brand, carbs };
  }

  const rows = [
    createData('AD1411', 'AD1411 LAQVIN PRIME', 'Sherwin-Williams Product Finishes Europe'),
    createData('AFL31', 'AFL31 HYDROPLUS SELF SEALER', 'Sherwin-Williams Product Finishes Europe'),
    createData('AD1430', 'AD1430 LAQVIN PRIME', 'Sherwin-Williams Product Finishes Europe'),
    createData('AF72', 'AF72 HYDRO WATERBORNE CLEAR SELF-SEALER FOR INTERIORS', 'Sherwin-Williams Product Finishes Europe'),
    createData('AF74', 'AF74 HYDRO WATERBORNE CLEAR SELF-SEALER FOR INTERIORS', 'Sherwin-Williams Product Finishes Europe'),
  ];
  
  const [search, setSearch] = React.useState('');
  const data = rows.filter(a => a.discription.toLowerCase().includes(search.toLowerCase()))

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
          <SearchIcon className='icon' /><TextField id="standard-basic" label="Filter Groups" variant="standard" value={search} onChange={(e) => setSearch(e.target.value)} />
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

            />

            <TextField
              autoFocus
              margin="dense"
              id="code"
              label="Description*"
              fullWidth
              variant="standard"

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
                  data.map((b, code) =>
                    <StyledTableRow key={code}  >
                      <StyledTableCell component="th" scope="row"  >
                        <b className='table-code'>{b.code}</b>
                      </StyledTableCell>
                      <StyledTableCell align="left"><b>{b.discription}</b></StyledTableCell>
                      <StyledTableCell align="left"><b>{b.brand}</b></StyledTableCell>
                      <StyledTableCell align="center">
                        <Button variant="contained" color="success" className='Button-delete'  ><DeleteIcon /></Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  )}

              </TableBody>

            </Table>


          </TableContainer>

        </div>

      </div>
    </div>
  );
}

// export default SearchBrandQuality;
