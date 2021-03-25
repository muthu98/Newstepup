import React from "react";
import { Typography,Button } from "@material-ui/core";
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import { withStyles, Theme,makeStyles,createStyles } from '@material-ui/core/styles';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import "./index.css"
interface DetailProps {
  detailHead: string;
  numberValue: string;
  triangle: string;
  rating: string
  previousValue: string;
  stars:Number
  tooltiptitle:string;
  tooltipOptions:string[]
}
const LightTooltip = withStyles((theme: Theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 13,
      maxWidth:254
    },
  }))(Tooltip);
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    customWidth: {
      width: "150px",
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
    }
  }),
);
const TileDetails = (props: DetailProps) => {
    const classes=useStyles()
    const toolTip=()=>{
        return(
            <div>
                <div>{props.tooltiptitle}</div>
                    {props.tooltipOptions.map((option,index)=><div key={index}>{option}</div>)}
            </div>
        )
    }
  return (
    <div className="tileDetails">
       <Tooltip title={toolTip()} placement="left-start" className="tooltip" classes={{tooltip:classes.customWidth}}><InfoOutlinedIcon className="infoIcon"/></Tooltip>
      <Typography className="tileObjectHeading">{props.detailHead}</Typography>
      
      <div className="valueIndicator">
        <Typography className="numbers">{props.numberValue}</Typography>
        {/* <img src={props.triangle} className="indicator" ></img> */}
        <div className="arrow-up"></div>
      </div>
      <Typography className="previous">Previous:{props.previousValue}</Typography>
      <div className="starsRating">
          {Array(props.stars).fill(0).map((_,index)=><img  key={index} src={process.env.PUBLIC_URL+"/assets/Star - medium.svg"} className="star"></img>)}
          
          {Array(5-Number(props.stars)).fill(0).map((_,index)=><img  key={index} src={process.env.PUBLIC_URL+"/assets/Polygon 1.svg"} className="star"></img>)}
      </div>
      <Typography className="nextStar">Next Star:{props.rating}</Typography>
    </div>
  );
};

export default TileDetails;
