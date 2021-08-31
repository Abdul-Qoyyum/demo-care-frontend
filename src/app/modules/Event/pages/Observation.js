import React, {
    useLayoutEffect,
    useState,
    useCallback
} from 'react';
import { connect } from "react-redux";
import Button from 'react-bootstrap-button-loader';
import {Col, Container, Row} from "react-bootstrap";

import {
    getMonths,
    getEvents,
    getEventTypes
} from "../_redux/eventAction";

import {
    BarChart,
    LineChart,
    Datatable
} from "../../../components";

function Observation({
                         month,
                         months,
                         events,
                         event_type,
                         event_types,
                         getMonths,
                         getEvents,
                         loading,
                         getEventTypes,
                         ...props
}){
    const [filter, setFilter] = useState({
        month : null,
        event_type : null
    });


    const monthText = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const handleClick = (event) => {
       setFilter({
           ...filter,
           [event.target.name] : event.target.value
       });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getEvents(filter)
    }

    const fetchMonths = useCallback(() => getMonths(), [getMonths]);
    const fetchEventTypes = useCallback(() => getEventTypes(),[getEventTypes]);

    useLayoutEffect(() => {
       fetchMonths();
       fetchEventTypes();
    },[
        fetchMonths,
        fetchEventTypes,
    ]);

    return (<Container className={"mt-5"} fluid>
            <div className="mx-4">
                <small>{month ?
                    `Simple Home Care report for the month of ${monthText[month - 1]}`
                    :
                    "Use options(i.e month,event) with the visualize button to view report"}</small>
                <hr/>
                <Row className={"mt-4"}>
                    <Col md={"3"}>
                        <form onSubmit={handleSubmit}>
                            <Button
                                className={"d-block w-100 btn btn-success"}
                                loading={loading} type={"submit"}>Visualize</Button>
                            <hr />
                            <p>Select Month</p>
                            <hr/>
                            {months.map((month,index) => (
                                <div style={{display: "block"}} key={index}>
                                    <input type="radio"
                                           className={"mt-1"}
                                           name={"month"}
                                           onClick={handleClick}
                                           key={index}
                                           value={month.value}
                                    />
                                    <span className={"mx-2"}
                                          style={{display:"inline-block"}}
                                    >{monthText[month.value - 1]}</span>
                                </div>
                            ))}
                            <hr/>
                            <p>Select Event</p>
                            <hr/>
                            {event_types.map((value,index) => (
                                <div style={{display: "block"}} key={index}>
                                    <input type="radio"
                                           className={"mt-1"}
                                           name={"event_type"}
                                           onClick={handleClick}
                                           value={value.event_type}
                                    />
                                    <span className={"mx-2"}
                                          style={{display:"inline-block",alignSelf:"center"}}
                                    >{value.event_type.replace(/_/g," ")}</span>
                                </div>
                            ))}
                        </form>
                    </Col>
                    <Col md={"9"}>
                        <BarChart
                            events={events}
                            event_type={event_type}
                        />
                        <LineChart
                            events={events}
                            event_type={event_type}
                        />
                        <Datatable events={events} />
                    </Col>
                </Row>

            </div>
            </Container>
    );
}

const mapStateToProps = state => {
   const { loading, filter, months, events,event_types } = state.eventStore;
   const {
       month,
       event_type
   } = filter;
   return { loading,month, months, events, event_type, event_types };
}
export default connect(mapStateToProps,{
    getMonths,
    getEvents,
    getEventTypes
})(Observation);