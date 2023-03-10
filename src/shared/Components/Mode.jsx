import { Box, IconButton } from '@mui/material'
import React from 'react'
import {ModeNight,LightMode} from '@mui/icons-material/'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
const Mode = ({isLightMode,handleDispatch}) => {
  return (
    <Box sx={{width:'40%',display:'flex',justifyContent:'center'}}>
      {isLightMode?<IconButton onClick={handleDispatch}>
        <ModeNightOutlinedIcon sx={{color:'black', fontweight:'bold',width:'20px',height:'20px'}}/>
        </IconButton>:
         <IconButton onClick={handleDispatch}>
            <LightMode sx={{color:'gold', fontweight:'bold',width:'20px',height:'20px'}}/>
        </IconButton>
        }       
     </Box>
  )
}

export default Mode