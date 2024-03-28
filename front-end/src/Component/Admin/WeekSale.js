import React from "react";
import CanvasJSReact from '@canvasjs/react-charts';
import { useState } from "react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const WeekSale = () =>{
    const weeklySale = {
        animationEnabled: true,
        theme:'light2',
        title:{
            text: "",
        },
        axisX: {
            title: "Week",
            reversed: false,
        },
        axisY: {
            title: "Number of Art Works Sold",
            includeZero: true,
            
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y:  51, label: "Sunday"},
                { y:  55, label: "Monday" },
                { y:  31, label: "Tuesday" },
                { y:  41, label: "Wednesday" },
                { y:  20, label: "Thursday" },
                { y:  21, label: "Friday" },
                { y:  41, label: "Saturday" }
            ]
        }]
    }
    const [data,setData]=useState({
        totalProducts: 260,
    })
    return(
        <>
    <div style={{textAlign: "center", fontSize: "20px", fontFamily: "Inter", fontWeight: "700", marginLeft: "50px"}}><br/>ARTSWORKS SOLD - WEEK 2022</div><br/>
     <div className="line"style={{ maxWidth: "850px", marginLeft: "25px"  }} >
     <CanvasJSChart options = {weeklySale} />
     </div>
    <div style={{textAlign: "left", fontSize: "20px", fontFamily: "Inter", fontWeight: "700", marginLeft: "50px"}}><br/>TOTAL - {data.totalProducts}</div><br/>
    
     </>
    )
}
export default WeekSale;