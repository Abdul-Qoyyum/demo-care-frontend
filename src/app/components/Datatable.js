import React from "react";
import {Card} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

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

export default Datatable;