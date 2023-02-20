import Textarea from '@mui/joy/Textarea';
import React from 'react'


const TextArea = ({textAreaWidth,textAreaHeight,placeholder}) => {
  return (
     <Textarea 
       sx={
        {
         width:textAreaWidth,
         height:textAreaHeight,
         borderRadius:'5px',
         borderColor:'rgba(0,0,0,0.3)',
        }
      } 
       placeholder={placeholder} 
    />
  )
}

export default TextArea




