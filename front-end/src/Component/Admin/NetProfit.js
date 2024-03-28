import React from "react";
import { useState } from "react";
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const NetProfit = () =>{
    const  netProfit = {
        animationEnabled: true,
        theme:'light2',
        title:{
            text: "",
        },
        axisX: {
            title: "Month",
            reversed: false,
        },
        axisY: {
            title: "Profit Per Month",
            includeZero: true,
            
        },
        data: [{
            type: "line",
            dataPoints: [
                { y:  1010000, label: "January"},
                { y:  2045000, label: "Febraury" },
                { y:  1142000, label: "March" },
                { y:  1801000, label: "April" },
                { y:  2004000, label: "May" },
                { y:  2550000, label: "June" },
                { y:  701000, label: "July" },
                { y:  901000, label: "August"},
                { y:  1001000, label: "September" },
                { y:  1171000, label: "October" },
                { y:  2001000, label: "November" },
                { y:  2603000, label: "December" }
            ]
        }]
    }
    const [profit,setProfit]=useState({
        netProfit: 18930000,
    })
    return(
        <>
     <div style={{textAlign: "center", fontSize: "20px", fontFamily: "Inter", fontWeight: "700", marginLeft: "50px"}}><br/>NET PROFIT - YEAR 2022</div><br/>
     <div className="line"style={{ maxWidth: "850px", marginLeft: "25px"  }} >
     <CanvasJSChart options = {netProfit} />
     </div>
    <div style={{textAlign: "left", fontSize: "20px", fontFamily: "Inter", fontWeight: "700", marginLeft: "50px"}}><br/>NET PROFIT - ₹ {profit.netProfit}</div><br/>
    
        </>
    )
}
export default NetProfit;