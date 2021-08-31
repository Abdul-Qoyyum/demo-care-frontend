import React from "react";
import {Card} from "react-bootstrap";
import {Line} from "react-chartjs-2";


function LineChart({
                       events,
                       event_type,
                       ...props
}){

    const lineState = {
        labels: events.map((e) => e.date),
        datasets: [
            {
                label: event_type && event_type.replace(/_/g," "),
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(70,130,180)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: events.map(event => event.total)
            }
        ]
    }

    return (<>
        <Card>
            <Line
                data={lineState}
                options={{
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    },
                    animation : false
                }}
            />
        </Card>
    </>)
}

export default LineChart;