import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { useSelector } from 'react-redux'
import { lineGraphLegends } from './lineGraphData'
function LineChart({lineGraphData}) {
 const {isLightMode} = useSelector(state=>state.auth)

 
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

 

   const lineData=[
{
    "id": "Survey",
    "color": "hsl(255, 70%, 50%)",
    "data":lineGraphData,
  },
  {
    "id": "Response",
    "color": "hsl(282, 70%, 50%)",
    "data":lineGraphData,
  },

]



  return(
    <ResponsiveLine
        data={lineData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 11,
                fill: `${isLightMode?'#1E1E1E':'white'}`
              }
            },
            legend:{
              text:{ 
              fill: `${isLightMode?'#1E1E1E':'white'}`
            }
           } 
          }
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{ theme: 'background'}}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={lineGraphLegends(isLightMode)}
    />
)
}

export default LineChart