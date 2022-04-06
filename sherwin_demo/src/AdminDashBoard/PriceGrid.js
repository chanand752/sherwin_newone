import React from "react";
import { Container, Row, Col, Dropdown, Button, ButtonGroup, InputGroup, FormControl, DropdownButton, Table, Form } from "react-bootstrap";
import './PriceGrid.css';

export default function PriceGrid() {
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
                        {/* <InputGroup className="mb-3" placeholder="Select a Brand" >
                            <FormControl aria-h6="Text input with dropdown button "
                                placeholder="Select a Brand" />

                            <DropdownButton
                                variant="outline-secondary"
                                id="input-group-dropdown-2"
                                align="end"
                            >
                                <Dropdown.Item href="#">Sherwin Williams</Dropdown.Item>
                                <Dropdown.Item href="#">Benjamin Moore</Dropdown.Item>
                                <Dropdown.Item href="#">Farrow & Ball</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup> */}
                        <Form.Select aria-h6="Default select example" >
                            <option>Select a Brand</option>
                            <option value="1">AcromaPro</option>
                            <option value="2">AcromaPro++</option>
                            <option value="3">AcromaPro+</option>
                        </Form.Select>
                    </Col>

                    <Col md={4} >
                        <h6 className="mb-3">Select a Quality</h6>
                        {/* <InputGroup className="mb-3">
                            <FormControl aria-h6="Text input with dropdown button" />

                            <DropdownButton
                                variant="outline-secondary"
                                id="input-group-dropdown-2"
                                align="end"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup> */}
                        <Form.Select aria-h6="Default select example" >
                            <option>Select a Quality</option>
                            <option value="1">AcromaPro</option>
                            <option value="2">AcromaPro++</option>
                            <option value="3">AcromaPro+</option>
                        </Form.Select>


                    </Col>
                    <Col>
                        <Button className="Grid-Button" variant="primary" >Search</Button>
                    </Col>
                </Row><br />
                <Row>

                    <Col className="third-row">
                        <h6>Price Grid for ACRNA:</h6>
                        <p className="confirm-change">*Click Save to confirm changes</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
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

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="Error-Message">No Price Grid for the selected Brand and Quality.</p>
                    </Col>
                </Row>

                <Row>
                    <Col className="price-grid-buttons">
                        <Button variant="secondary">Cancel</Button>
                        <Button variant="primary">Save</Button>
                        {/* <button className="btn" >Cancel</button>
                        <button className="btn" >Save</button> */}
                    </Col>
                </Row>

            </Container>
        </div>
    )
}



