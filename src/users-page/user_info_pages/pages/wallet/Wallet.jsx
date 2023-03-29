import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../../../components/NavBar'

const Wallet = ({isScrolling}) => {
    const {modeColor} = useSelector(state=>state.auth)
  return (
    <Box sx={{width:'100%',height:'auto',overflowX:'hidden',backgroundColor:modeColor}}>
     <NavBar isScrolling={isScrolling}/>
  </Box>
  )
}

export default Wallet