import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, InputGroup, FormControl, Card, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Promos(props) {
    return (
        <Container>
            <h5 className="mb-3">Flash Sale</h5>
            <Card className="p-3">
                <div className="my-2">
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check 
                    checked={props.flashSales.checked} 
                    onChange={props.handlePromoCheckBox} 
                    type="checkbox" 
                    label="Flash Sale" />
                </Form.Group>
                    <span className="mr-1">Start Date</span>
                    <DatePicker
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                        handleDatepicker={props.handleDatepicker}
                        selected={props.flashSales.startDate}
                        onChange={(e)=>props.handleDatepicker(e, "startDate")}
                        minDate={new Date()}
                    />
                    {/* <Calendar
                   
                    /> */}
                </div>
                <div className="my-2">
                    <span className="mr-1">End Date</span>
                    <DatePicker
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                    handleDatepicker={props.handleDatepicker}
                    selected={props.flashSales.endDate}
                    onChange={(e)=>props.handleDatepicker(e, "endDate")}
                    minDate={new Date()}
                    />
                    {/* <Calendar
                    

                    /> */}
                </div>
                <InputGroup className="my-2">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                    <FormControl 
                    name="price" 
                    placeholder="Promo Price" 
                    value={props.flashSales.price}
                    onChange={props.handleSalesPrice}/>
                </InputGroup>
            </Card>
        </Container>
    )
}

export default Promos