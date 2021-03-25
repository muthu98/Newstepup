import React from 'react'
import TileDetails from '../TileDetails/index'
import "./index.css"
interface TileProps{
    header:string,
    detailsData: {
        detailHead: string;
        numberValue: string;
        triangle: string;
        rating: string
        previousValue: string;
        stars:Number
        tooltiptitle:string;
        tooltipOptions:string[]
      }[]
}
const Tile=(props:TileProps)=>{
    return(
        <div className={`tile ${props.header}`}>
            <p className="tileHeading">{props.header}</p>
            <div className="tiles">
            {props.detailsData.map((detail)=><TileDetails {...detail}/>)}
            </div>    
        </div>
    )
}

export default Tile