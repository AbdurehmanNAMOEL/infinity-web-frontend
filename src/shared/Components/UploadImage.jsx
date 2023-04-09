import React, { useEffect, useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from 'react-hook-form'
import { uploadImage } from '../../redux/features/authSlice';
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle';
import LoadingAnimation from './LoadingAnimation';

const UploadImage = ({title,id,inputValue,type,questionNumber,surveyAnswer,setSurveyAnswer}) => {
  const {uploadImageUrl,isImageLoading,isLightMode}= useSelector(state=>state.auth)
  const [imageUrl,setImageUrl]=useState('')
  const dispatch = useDispatch()



  const handleImageInputFieldValue=async(e)=>{
       const formData = new FormData();
       formData.append("file",e.target.files[0]);
       dispatch(uploadImage({formData})) 
            
       if(type==='image'){
        let isFound= surveyAnswer.find(data=>(data.questionId===id))===undefined
       if(isFound){  
          if(uploadImageUrl?.urls[0]!==undefined){
       setSurveyAnswer(
          [...surveyAnswer,
          {"questionId":id,"answer":[`${uploadImageUrl?.urls[0]}`]}
          
        ])}
         setImageUrl(URL.createObjectURL(e.target.files[0]))
         
      }else{
        surveyAnswer.map(question=>{
        if(question.questionId===id){
          setImageUrl(URL.createObjectURL(e.target.files[0]))
          return question.answer=[`${uploadImageUrl?.urls[0]}`]    
      }else return question
    })
  }
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
      sx={[style.imageBtnContainer]}>
        {isImageLoading?<LoadingAnimation/>:
        !imageUrl?
        <Typography>Upload</Typography>:
       <img style={{width:'80%',heigh:'80%',position:'absolute'}} alt='' src={imageUrl}/>
       }
        
        <input 
          id={title}
          title={title} 
          value={surveyAnswer?.answer}
          onChange={handleImageInputFieldValue}
          hidden accept="image/png" 
          multiple type="file"
          />    
      </Button>
    </Box>
    </Box>
  )
}

const style={
  imageUploaderContainer:{
        width:'40%',
        height:'300px',
        border:'dashed 1px black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        marginTop:'20px',
        flexDirection:'column'
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
     height:'95%',
     backgroundColor:'white',
     zIndex:1000,   
     backgroundSize:'cover',
    
     color:'#1A6CE8',
        '&:hover':{
          backgroundColor:'white'
      } 
     }
}
export default UploadImage