import { ResponsivePie } from '@nivo/pie'
import { setPieChart } from '../../DummyData/data'
import { useSelector } from 'react-redux'
import { pieChartLegendData, pieFillChartData } from './pieCharData'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PieChart = () =>{ 
    const {generatedSurvey,answeredSurvey}= useSelector(state=>state.admin)
  return (
    <ResponsivePie
        data={setPieChart(generatedSurvey,answeredSurvey)}
        margin={{ top: 40, right: 80,bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{from: 'color',modifiers: [['darker',0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{from: 'color', modifiers:[['darker',2]]}}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={pieFillChartData()}
        legends={pieChartLegendData()}
    />
 )
}
export default PieChart