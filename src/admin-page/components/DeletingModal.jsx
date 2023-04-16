import React from 'react'
import Modal from './Modal'
import { Box, Paper, Typography } from '@mui/material'
import ButtonStyled from '../../users-page/components/ButtonStyled'

const DeletingModal = ({setIsDeletingModalOpen,handleSurveyDeletingApproval}) => {
  
  
  return (
   <Modal>
        <Paper sx={{width:'400px',height:'200px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Typography>Are you sure you want to delete this survey?</Typography>
          <Box sx={{width:'70%',height:'50px',display:'flex',gap:'40px',marginTop:'30px'}}>
             <ButtonStyled 
               sx={{marginRight:'60px'}} 
               label={'No'} 
               btnHeight={'40px'}
               btnWidth={'120px'}
               setValue={()=>setIsDeletingModalOpen(false)}
               bgColor='#1A6CE8'/>
              
              <ButtonStyled 
               sx={{marginRight:'60px'}} 
               setValue={handleSurveyDeletingApproval}
               label={'yes'} 
               btnHeight={'40px'}
               btnWidth={'120px'}
               bgColor='red'/>
          </Box>
        </Paper>
      </Modal>
  )
}

export default DeletingModal