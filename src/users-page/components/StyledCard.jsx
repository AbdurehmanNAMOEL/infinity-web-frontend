import { Box, Card, Divider, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
const StyledCard = ({title,body, icon}) => {
  return (
    <Card sx={{width:'100%',height:'230px'}}>
      <Box sx={
        { width:'100%',
          height:'50px',
          display:'flex',
          gap:'20px',justifyContent:'center',alignItems:'center'}}>
        <IconButton>
          {icon}
        </IconButton>
        <Typography sx={{width:'80%'}}>{title}</Typography>
      </Box>
      <Divider/>
      <Box>
        <Typography sx={{padding:'15px'}}>{body}</Typography>
      </Box>
    </Card>
  )
}

export default StyledCard