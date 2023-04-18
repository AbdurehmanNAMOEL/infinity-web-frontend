export const MonthlyData=()=>{
  let dataList= [
      {
        "x": "January",
        "y": 114
      },
      {
        "x": "Feburary",
        "y": 195
      },
      {
        "x": "Martch",
        "y": 253
      },
      {
        "x": "April",
        "y": 299
      },
      {
        "x": "May",
        "y": 77
      },
      {
        "x": "June",
        "y": 1
      },
    
    ]
  return dataList
}

export const DailyData=()=>{
  let dataList= [
      {
        "x": "Monday",
        "y": 114
      },
      {
        "x": "Tuesday",
        "y": 195
      },
      {
        "x": "Wensday",
        "y": 253
      },
      {
        "x": "Thursday",
        "y": 299
      },
      {
        "x": "Friday",
        "y": 77
      },
      {
        "x": "Saturday",
        "y": 1
      },
       {
        "x": "Sunday",
        "y": 1
      },
    
    ]
  return dataList
}







export const setPieChart=(survey,answeredSurvey)=>{
 const pieChartData = [
  {
    "id": "Survey",
    "label": "Survey",
    "value": survey.length,
    "color": "hsl(121, 70%, 50%)"
  },
  {
    "id": "Answered Survey",
    "label": "Answered Survey",
    "value": answeredSurvey?.length,
    "color": "hsl(7, 70%, 50%)"
  },
 
]
return pieChartData

}
