import React from "react";
import { Container, Row, Col, Dropdown, Button, ButtonGroup, InputGroup, FormControl, DropdownButton, Table, Form } from "react-bootstrap";
import './PriceGrid.css';

export default function PriceGrid() {
    const [open, setOpen] = React.useState(false);
    const [name,setName] = React.useState()
    const [quality, setQuality] = React.useState()


    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleChangeQuality = (e) => {
        const {value} = e.target;
            setQuality(value )
        }

   const handleChange = (e) => {
    const {value} = e.target;
        setName(value )
    }

    const handleClose = () => {
        setOpen(false);
        console.log("closed")

    };

    function rowStyleFormat() {
        return { backgroundColor: 'blue' };
    }

    return (
        <div className='Price-Grid-component-body'>
            <h3 >Price Grid</h3><br />
            <Container className="priceGrid-input">
                <Row >
                    <Col md={4}>
                        <h6 className="mb-3">Select a Brand</h6>

                        <Form.Select aria-h6="Default select example"  value={name} name='value' onChange={handleChange}>
                            <option>Select a Brand</option>
                            <option value="AcromaPro">AcromaPro</option>
                            <option value="AcromaPro++">AcromaPro++</option>
                            <option value="AcromaPro+">AcromaPro+</option>
                        </Form.Select>
                    </Col>

                    <Col md={4} >
                        <h6 className="mb-3">Select a Quality</h6>

                        <Form.Select aria-h6="Default select example" value={quality} name='value' onChange={handleChangeQuality} >
                            <option>Select a Quality</option>
                            <option value ="0COLOARNTS">0COLOARNTS</option>
                            <option value="Red Color">Red Color</option>
                            <option value="Blue Color">Blue Color</option>
                        </Form.Select>


                    </Col>
                    <Col>
                        <Button className="Grid-Button" variant="primary" onClick={handleClickOpen} >Search</Button>
                    </Col>
                </Row><br />
                {open === true &&
                    <div >
                        <Col className="third-row" >
                            <Row>
                                <h6>Price Grid for : {name} : {quality} </h6>
                            </Row>
                            <Row>
                                <p className="confirm">*Click Save to Confirm Changes</p>
                            </Row>
                        </Col>
                        <Row>
                            <Table striped bordered hover Style={rowStyleFormat}>
                                <thead>
                                    <tr>
                                        <th>Cost Code</th>
                                        <th>Cost Level</th>
                                        <th>Refinisher Price</th>
                                        <th>Profit Percentage</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input /></td>
                                        <td><input /></td>
                                        <td><input /></td>
                                        <td><input /></td>
                                        <td><Button variant="secondary">Add</Button></td>
                                    </tr>
                                </tbody>
                            </Table>

                        </Row>
                        <Row>
                            <Col>
                                <p className="Error-Message">No Price Grid for the selected Brand and Quality.</p>
                            </Col>
                        </Row>
                        <Row  >
                            <Col className="price-grid-buttons" >
                                <Button variant="secondary" onClick={handleClose}
                                >Cancel</Button>
                                <Button variant="primary">Save</Button>

                            </Col>
                        </Row>
                    </div>

                }


            </Container>
        </div>
    )
}



