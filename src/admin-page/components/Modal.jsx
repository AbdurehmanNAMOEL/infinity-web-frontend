import { Box } from '@mui/material'
import React from 'react'

const Modal = ({children,closeModal}) => {
   const handleModalClose=(e)=>{
     e.stopPropagation();
     closeModal()
   }
  return (
    <Box onClick={handleModalClose} sx={style.modalMainContainer}>
      {children}
    </Box>
  )
}

 const style={
   modalMainContainer:{
    width:'100%',
    height:'100vh',
    position:'fixed',
    backgroundColor:'rgba(0,0,0,0.5)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    zIndex:9000

  }
}

export default Modal