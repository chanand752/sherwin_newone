// Brand Quality Table
import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
// import { Button } from 'react-bootstrap';
import { TextField, TableCell, TableBody, Table, TableRow, TableContainer, TableHead, Paper, tableCellClasses, styled, createTheme, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './BrandQuality.css'


function BrandQualityTable() {
  // const [data, setData] = useState()

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      border: 5,
      padding: 10,
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
      border: 5,
    },
  }));

  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs, };
  }
  // const [data, setData] = useState([createData]);


  const handleDelete = (index, e) => {
    e.target.parentNode.parentNode.parentNode.deleteRow(index)
    alert('Selcted Row deleted')
    console.log('deleted');

  }

 
  const rows = [
    createData('AD1411', 'AD1411 LAQVIN PRIME', 'Sherwin-Williams Product Finishes Europe'),
    createData('AFL31', 'AFL31 HYDROPLUS SELF SEALER', 'Sherwin-Williams Product Finishes Europe'),
    createData('AD1430', 'AD1430 LAQVIN PRIME', 'Sherwin-Williams Product Finishes Europe'),
    createData('AF72', 'AF72 HYDRO WATERBORNE CLEAR SELF-SEALER FOR INTERIORS', 'Sherwin-Williams Product Finishes Europe'),
    createData('AF74', 'AF74 HYDRO WATERBORNE CLEAR SELF-SEALER FOR INTERIORS', 'Sherwin-Williams Product Finishes Europe'),
  ];



  return (
    <div className='body-down'>
      <div className='table-cont'>
      {/* <h4><b>Check Available Cities  :  </b><input type="text" placeholder="Enter City Name" value={search} onChange={(e) => setSearch(e.target.value)} /></h4>
      {rows.filter(a => a.name.toLowerCase().includes(search.toLowerCase())).map(b => {
                        return <div>
                            <h4>{b.name}</h4>
                        </div>
                    })} */}
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
              {rows.map((row, index) => (
                <StyledTableRow key={index}  >
                  <StyledTableCell component="th" scope="row"  >
                    <b className='table-code'>{row.name}</b>
                  </StyledTableCell>
                  <StyledTableCell align="left"><b>{row.calories}</b></StyledTableCell>
                  <StyledTableCell align="left"><b>{row.fat}</b></StyledTableCell>
                  <StyledTableCell align="center">
                    <Button variant="contained" color="success" className='Button-delete' onClick={e => handleDelete(index,e)} ><DeleteIcon /></Button>
                    {/* <Button variant="contained" color="primary" className='Button-delete' ><DeleteIcon /></Button> */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </div>


  );
}

export default BrandQualityTable;
