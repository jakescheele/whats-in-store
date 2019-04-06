import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, InputGroup, FormControl, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Promos(props) {
    return (
        <Container>
            <h5 className="mb-3">Flash Sale</h5>
            <Card className="p-3">
                <div className="my-2">
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
                    />
                    {/* <Calendar
                    

                    /> */}
                </div>
                <InputGroup className="my-2">
                    <FormControl name="price" placeholder="Promo Price" onChange={props.handleSalesPrice}/>
                </InputGroup>
            </Card>
        </Container>
    )
}

export default Promos