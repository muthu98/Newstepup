import React from "react"
const PieChart=()=>{
    return(
        <div>
        <svg width="300px" height="300px" viewBox="0 0 42 42" className="donut">
        {/* <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle> */}
        <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="transparent" stroke-width="3"></circle>
      
        <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#00B2A9" stroke-width="3" stroke-dasharray="22 78" stroke-dashoffset="25"></circle>
        <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#00B2A9" stroke-width="3" stroke-dasharray="11 89" stroke-dashoffset="103"></circle>
        <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#911987" stroke-width="3" stroke-dasharray="17 83" stroke-dashoffset="92"></circle>
        <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="orange" stroke-width="3" stroke-dasharray="17 83" stroke-dashoffset="75"></circle>
        <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#D90F06" stroke-width="3" stroke-dasharray="33 67" stroke-dashoffset="58"></circle>    
      </svg>
      </div>
    )
 }
 export default PieChart