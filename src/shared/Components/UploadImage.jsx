import React, { useEffect, useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const UploadImage = ({title,inputValue,questionNumber,surveyAnswer,setSurveyAnswer}) => {
  const {modeColor,isLightMode}= useSelector(state=>state.auth)
  const [imageUrl,setImageUrl]=useState('')


  const handleImageInputFieldValue=(e)=>{
        let isFound= surveyAnswer.find(data=>(data.query===e.target.title))===undefined
       if(isFound){  
          setSurveyAnswer(
          [...surveyAnswer,
          {"query":e.target.title,"answer":URL.createObjectURL(e.target.files[0])}
        ])
         setImageUrl(URL.createObjectURL(e.target.files[0]))
         
      }else{
        surveyAnswer.map(question=>{
        if(question.query===e.target.title){
          setImageUrl(URL.createObjectURL(e.target.files[0]))
          return question.answer=URL.createObjectURL(e.target.files[0])     
      }else return question
    })
  }
      
  }

  useEffect(()=>{
    console.log(surveyAnswer)
  },[surveyAnswer,imageUrl])



  return (
    <Box sx={{height:'auto'}}>
      <Box sx={style.imageQuestionContainer}>
        <Typography sx={[style.questionNumber,{color:isLightMode?'#1e1e1e':'white'}]}>
          {`${questionNumber+1}.`}
        </Typography>
         <label style={{width:'100%',fontSize:'16px',marginLeft:'10px'
          ,color:isLightMode?'#1e1e1e':'white'}} htmlFor={title}>
        {title}
      </label>
      </Box>
      
    <Box sx={[style.imageUploaderContainer,{backgroundColor:isLightMode?'white':'#333'}]}>
     <Button 
       variant="contained"  
       component="label" 
      sx={[style.imageBtnContainer,{backgroundImage:`url(${`${imageUrl}`})`}]}>
      <AddPhotoAlternateIcon sx={style.imageUploadIcon}/>
        <input 
          id={title}
          title={title} 
          value={imageUrl?.answer}
          onChange={handleImageInputFieldValue} 
          hidden accept="image/png" 
          multiple type="file" />
      </Button>
    </Box>
    </Box>
  )
}

const style={
    imageUploaderContainer:{
        width:'60%',
        height:'300px',
        border:'dashed 1px black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        marginTop:'20px'
    },
    imageUploadIcon:{
        width:'20%',
        height:'20%'
    },
    imageQuestionContainer:{
      display:'flex',
      height:'40px',
      width:'100%',
      justifyContent:'center',
      alignItems:'center'
    },
    questionNumber:{
      fontSize:'18px',
     },

    imageBtnContainer:{
     width:'90%',
     height:'90%',
     backgroundColor:'white',
     zIndex:1000,   
     backgroundSize:'cover',
     backgroundPosition:'center',
     color:'#1A6CE8',
        '&:hover':{
          backgroundColor:'white'
      } 
     }
}
export default UploadImage