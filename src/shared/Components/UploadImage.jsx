import React, { useEffect, useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from 'react-hook-form'
import { uploadImage } from '../../redux/features/authSlice';
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle';
import LoadingAnimation from './LoadingAnimation';
import ActionButton from '../../users-page/components/ActionButton';

const UploadImage = ({title,id,inputValue,type,questionNumber,surveyAnswer,setSurveyAnswer}) => {
  let {uploadImageUrl,isImageLoading,isLightMode}= useSelector(state=>state.auth)
  const [imageUrl,setImageUrl]=useState('')
  const dispatch = useDispatch()
   const [isBtnDisabled,setIsBtnDisabled]=useState(true)

  const handleImageInputFieldValue=(e)=>{
       const formData = new FormData();
       formData.append("file",e.target.files[0]);
       dispatch(uploadImage({formData})) 
        setImageUrl(URL.createObjectURL(e.target.files[0]))   
   
      
}

  useEffect(()=>{
    if(imageUrl){
      setIsBtnDisabled(false)
    }else setIsBtnDisabled(true)
  },[imageUrl])

const handleUploadImage=()=>{
      if(type==='image'){
        let isFound = surveyAnswer.find(data=>(data.questionId===id))===undefined
        if(isFound){  
          if(uploadImageUrl){
            setSurveyAnswer([...surveyAnswer,
             {"questionId":id,"answer":[`${uploadImageUrl?.urls[0]}`]}
           ])}
        
       }else{
         surveyAnswer.map(question=>{
         if(question.questionId===id){
         
          return question.answer=[`${uploadImageUrl?.urls[0]}`]    
      }else return question
    })
  }

}
    
}

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
        <Typography>choose Image</Typography>:
       <img style={{width:'80%',heigh:'60%'}} alt='' src={imageUrl}/>
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
      <Box sx={{width:'90%',marginTop:'10px',marginBottom:'10px'}}>
      <ActionButton
       btnLabel={'UploadFile'} 
       isBtnDisabled={isBtnDisabled}
       onClick={handleUploadImage}/>
       </Box>
    </Box>
    </Box>
  )
}

const style={
  imageUploaderContainer:{
        width:'40%',
        height:'330px',
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
     marginTop:'20px',  
     backgroundSize:'cover',
    
     color:'#1A6CE8',
        '&:hover':{
          backgroundColor:'white'
      } 
     }
}
export default UploadImage