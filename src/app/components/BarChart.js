import React from 'react';
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import PropTypes from 'prop-types';

function BarChart({
                      events,
                      event_type,
                      ...props
}){


    const barState = {
        labels: events.map((e) => e.date),
        datasets: [
            {
                label: event_type && event_type.replace(/_/g," "),
                backgroundColor: 'rgba(70,130,180)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: events.map(event => event.total)
            }
        ]
    }

    return (
        <>
            <Card className={"mb-4"}>
                <Bar
                    data={barState}
                    options={{
                        title:{
                            display:true,
                            text:"Home Care report for Jane Doe",
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
        </>
    )

}

BarChart.propTypes = {
    events: PropTypes.array,
    event_type: PropTypes.string
}

export default BarChart;