import { Box, CardMedia, Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const OurWorkCard=({imageUrl,title})=>{
   const {isLightMode,modeColor} = useSelector(state=>state.auth)
  return (
   <Paper sx={[style.ourWorkMainCardContainer,{backgroundColor:modeColor,border:`solid 1px ${isLightMode?'rgba(0,0,0,0.2)':'#ACACAC'}`}]}>
      <Box sx={{width:'80%',height:'150px'}}>
        <CardMedia image={imageUrl } sx={{width:'100%',height:'100%'}}/>
        <Typography sx={{
          textAlign:'center',
          fontWeight:'bold',
          marginTop:'10px',
          fontSize:'12px',
          color:`${isLightMode?'#1e1e1e':'white'}`
        }}>{title}</Typography>
      </Box>
   </Paper>
  )
}

const style={
ourWorkMainCardContainer:{
    borderRadius:'5px',
    width:'200px',
    height:'250px',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    flexDirection:'column',
   
  },
}
