import { Card, CardMedia } from '@mui/material'
import React from 'react'

const MediaCard = ({mediaWidth,mediaHeight,imgUrl}) => {
  return (
     <Card sx={[style.mediaContainer,{width:mediaWidth,height:mediaHeight}]}>
        <CardMedia 
          image={imgUrl} 
          sx={{width:'100%',height:'100%'}}
        />
     </Card>
  )
}

const style={
 mediaContainer:{
    boxShadow:'none',
    borderRadius:'0',
    backgroundColor:'#D9D9D9'
    
 }
}
export default MediaCard