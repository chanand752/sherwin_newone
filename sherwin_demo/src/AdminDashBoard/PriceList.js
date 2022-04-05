import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';

import './PriceGrid.css'
import { InputGroup, Dropdown, SplitButton, FormControl, DropdownButton, Form, Button } from 'react-bootstrap'

function PriceList() {
  const [currency, setCurrency] = React.useState('');
  function handleChange(event) {
      setCurrency(event.target.value);
  };


    return (
      <div className='Price-component-body'>
      <h3 >Price List</h3><br />
      <h6>Please Select a Brand to start</h6>
      <div>
          <Form.Select aria-h6="Default select example"  className='w-25 mb-2 mt-2'>
              <option>Select</option>
              <option value="1">AcromaPro</option>
              <option value="2">AcromaPro++</option>
              <option value="3">AcromaPro+</option>
          </Form.Select>
      </div><br />

      <h6>Add New Ingredient Price</h6>
      <div className='mt-2 input'>
          <InputGroup size="sm" >
              <FormControl aria-h6="Small" placeholder='Sales Number' aria-describedby="inputGroup-sizing-sm" className='form-width-1' />
              </InputGroup>
              <InputGroup size="sm" >
              <FormControl aria-h6="Small" placeholder='List Price' aria-describedby="inputGroup-sizing-sm" className='form-width-1' />
              </InputGroup>
              <InputGroup size="sm" >
              <FormControl aria-h6="Small" placeholder='Jobber Price' aria-describedby="inputGroup-sizing-sm" className='form-width-1'/>
              </InputGroup>
              <InputGroup size="sm" >
              <FormControl aria-h6="Small" placeholder='Container Size' aria-describedby="inputGroup-sizing-sm" className='form-width-1'/>
              </InputGroup>
             <Button variant="primary" className='pricelist-Button'>Add Price</Button>
      </div><br />
      <h6>no prices found</h6>
  </div>

    );
}
export default PriceList;