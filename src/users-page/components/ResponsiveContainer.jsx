import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { handleResponsiveness } from '../auth/styles/loginStyle'

const ResponsiveContainer = ({children}) => {
    const {modeColor} = useSelector(state=>state.auth)
  return (
    <Box sx={[style.mainContainer,{backgroundColor:modeColor}]}>
        {children}
    </Box>
  )
}

const style={
  mainContainer:{
    width:'100%',
    height:handleResponsiveness('auto','60vh'),
    display:'flex',
    marginTop:'20px',
    flexDirection:handleResponsiveness('column','row'),
    justifyContent:'center',
    alignItems:'center',
    gap:'20px'
  }
}

export default ResponsiveContainer