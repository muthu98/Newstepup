
import  React,{useState,useEffect}  from 'react'
import PieChart from '../../components/PieChart/index'
import Tile from '../../components/Tile/index'
import "./index.css"


const backendData={
    username:"Joe",
    timeperiod:"july 2020 to Dec 2020",
    stars:2.5
 }
  type backend={
    username:String,
    timeperiod:String,
    stars:Number
 }
 const userDetails=[
     {
         header:"Guest",
         detailsData:[{
            detailHead: "Average Complaints Ratio",
            numberValue: "16",
            triangle: "../../assets/Delta indicator.svg",
            rating: "Reduce by 3",
            previousValue: "8",
            stars:2,
            tooltiptitle:'The thresholds for grade storing as follows:',
            tooltipOptions:["A:0.0 to 0.0","B:0.0 to 0.0","C:0.0 to 0.0","D:0.0 to 0.0"]
        },{
            detailHead: "Average Windows Time",
            numberValue: "70s",
            triangle: "../../assets/Delta indicator.svg",
            rating: "Reduce by 5s",
            previousValue: "83s",
            stars:3,
            tooltiptitle:'The thresholds for grade storing as follows:',
            tooltipOptions:["A:0.0 to 0.0","B:0.0 to 0.0","C:0.0 to 0.0","D:0.0 to 0.0"]
        }]
     },
     {
        header:"Team",
        detailsData:[{
           detailHead: "Average Complaints Ratio",
           numberValue: "16",
           triangle: "../../assets/Delta indicator.svg",
           rating: "Reduce by 3",
           previousValue: "8",
           stars:2,
           tooltiptitle:'The thresholds for grade storing as follows:',
           tooltipOptions:["A:0.0 to 0.0","B:0.0 to 0.0","C:0.0 to 0.0","D:0.0 to 0.0"]
       },{
           detailHead: "Average Windows Time",
           numberValue: "70s",
           triangle: "../../assets/Delta indicator.svg",
           rating: "Reduce by 5s",
           previousValue: "83s",
           stars:3,
           tooltiptitle:'The thresholds for grade storing as follows:',
           tooltipOptions:["A:0.0 to 0.0","B:0.0 to 0.0","C:0.0 to 0.0","D:0.0 to 0.0"]
       }]
    },
    {
        header:"Standard",
        detailsData:[{
           detailHead: "Average Complaints Ratio",
           numberValue: "15",
           triangle: "../../assets/Delta indicator.svg",
           rating: "Reduce by 5",
           previousValue: "8",
           stars:2,
           tooltiptitle:'The thresholds for grade storing as follows:',
           tooltipOptions:["A:0.0 to 0.0","B:0.0 to 0.0","C:0.0 to 0.0","D:0.0 to 0.0"]
        }
       ]
    }
 ]

const Dashboard=()=>{
    const [userName,setUsername]=useState("Joe")
   const [data,setData]=React.useState<backend>() //for setting the variable with type
   //setData(backendData)
   useEffect(() => {
   setData(backendData) //this will set state to data variable from backenddata
  }, []);
   return(
      <div className="root">
         <div className="Heading">Hi {data?.username} Here's your Scorecard for {data?.timeperiod}</div>
          
         <div className="tileContainer">
         <PieChart/>
            {userDetails.map((userDetail,index)=><Tile key={index} header={userDetail.header} detailsData={userDetail.detailsData}/>
)}</div>
      </div>
   )
}

export default Dashboard