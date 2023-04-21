import { Box } from '@mui/material'
import React from 'react'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import { useSelector } from 'react-redux'

const TextField = ({title,questionNumber,setValue,inputValue}) => {
  const {isLightMode}=useSelector(state=>state.auth)

  return (
    <Box sx={{width:'80%',display:'flex',flexDirection:'column',gap:'8px'}}>
    <Box sx={{fontSize:handleResponsiveness('14px','18px'),
       width:'100%',gap:'10px',color:'rgba(0,0,0,0.7)'}}>
      <span sx={{color:isLightMode?'#1e1e1e':'white'}}>
         {`${questionNumber?questionNumber:'1'}.  `}
      </span>
       <label style={{width:'100%',fontSize:'16px',marginLeft:'10px'
          ,color:isLightMode?'#1e1e1e':'white'}} htmlFor={title}>
        {title}
      </label>
        </Box>
    
     <textarea 
      title={title}
      onChange={setValue} 
      type={'text'} 
      value={inputValue}
      style={{
        marginTop:'8px',
        marginLeft:'35px',
        textIndent:'10px',
        height:'80px',
        backgroundColor:isLightMode?'white':'#1e1e1e',
        color:isLightMode?'#1e1e1e':'white',
        border:!isLightMode?'none':'solid 1px rgba(0,0,0,0.2)',
        textAlign:'20px'
      }}  
      width='100%' height='30px'
      />
   </Box>
  )
}

export default TextField