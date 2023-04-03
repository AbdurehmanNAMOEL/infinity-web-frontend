import { Box } from '@mui/material'
import React from 'react'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import UploadImage from '../../shared/Components/UploadImage'

const TextField = ({title,imageUrl,questionNumber,setValue,inputValue,questionType}) => {

  console.log(inputValue);
  return (
    <Box sx={{width:'80%',display:'flex',flexDirection:'column',gap:'8px'}}>
    <Box sx={{fontSize:handleResponsiveness('14px','18px'),width:'100%',gap:'10px',color:'rgba(0,0,0,0.7)'}}>
      <span>{`${questionNumber?questionNumber:'1'}.  `}</span>
      <label style={{width:'100%'}} htmlFor={title}>{title}</label></Box>
     {questionType==='text'? 
     <textarea 
      title={title}
      onChange={setValue} 
      type={'text'} 
      value={inputValue}
      style={{marginTop:'8px',marginLeft:'35px',textIndent:'10px',height:'80px'}}  
      width='100%' height='30px'
      />:
      <Box sx={{marginLeft:'35px',width:'100%'}}>
       <UploadImage
          title={title}
          setImage={setValue}
          inputValue={imageUrl}
        />
      </Box>
      }
   </Box>
  )
}

export default TextField