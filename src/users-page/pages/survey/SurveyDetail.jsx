import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import ButtonStyled from '../../components/ButtonStyled'
import InputField from '../../components/InputField'
import NavBar from '../../components/NavBar'
import RadioInput from '../../components/RadioInput'
import TextField from '../../components/TextField'

const SurveyDetail = ({surveyData}) => {
  return (
    <Box sx={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <NavBar/>
      <Box sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',marginTop:'80px'}}>
          <Paper sx={
            {
              width:'70%',
              height:'500px',
              overflowY:'scroll',
              display:'flex',
              justifyContent:'center',
              flexDirection:'column',
              marginTop:'10px'
              }}>
             {
              surveyData?.map((item,index)=>
                <Typography key={index} variant='h4' sx={{color:'#1A6CE8',padding:'40px',marginTop:'100px',display:'flex',flexDirection:'column'}}>
                  {item.questionTitle}
                  {
                    item?.questions?.map((item,index)=>
                    <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    { item?.questionType ==='text'?
                      <Box sx={{width:'50%',marginTop:'16px'}}>
                        <TextField key={index} questionNumber={index+1} title={item.questionTitle}/>
                       </Box> 
                    :<Box sx={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'20px'}}>
                         {<Box sx={{display:'flex',gap:'8px',color:'#1e1e1e',alignItems:'center'}}>
                            <label style={{fontSize:'20px'}}>{`Q${index+1}.`}</label>
                            <Typography variant='h6'>{item.questionTitle}</Typography>
                          </Box>
                          }
                         <Box sx={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
                            {
                              item.choiceAnswer.map((item,index)=>
                                  <RadioInput 
                                    key={index} 
                                    id={index} 
                                    questionTitle={item.answer}
                                  />
                                )
                            }
                         </Box>
                      </Box>}
                  </Box>  
                    )
                  }
                </Typography>
              )
             }
             <Box sx={{width:'100%',display:'flex',justifyContent:'center',marginBottom:'20px'}}>
             <ButtonStyled 
               label={'Submit'} 
               bgColor='#1A6CE8'/>
             </Box>
          </Paper>
      </Box>
    </Box>
  )
}

export default SurveyDetail