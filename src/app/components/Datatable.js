import React from "react";
import { Card } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import PropTypes from "prop-types";

function Datatable({ events, ...props }){

    const columns = [
        {
            dataField: "event_type",
            text: "Event"
        },
        {
            dataField: "day",
            text: "Day"
        },
        {
            dataField: "date",
            text: "Date"
        },
        {
            dataField: "total",
            text: "No. of occurrence"
        }
    ]


    return(<>
       <Card className={"my-4"}>
           <BootstrapTable
               columns={columns}
               data={events}
               keyField={"date"}
           />
       </Card>
   </>)
}

Datatable.propTypes = {
    events: PropTypes.array
}

export default Datatable;