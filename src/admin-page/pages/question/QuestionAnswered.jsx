import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DropDown from '../../components/DropDown'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import ButtonStyled from '../../../users-page/components/ButtonStyled'
import Modal from '../../components/Modal'
import { useState } from 'react'
import { handleResponsiveness } from '../../../users-page/auth/styles/loginStyle'

const QuestionAnswered = ({isDrawerOpen,closeDrawer}) => {

    const dispatch = useDispatch()
    const {answeredSurvey,isLightMode} = useSelector(state=>state.admin)
    const {modeColor} = useSelector(state=>state.auth)
    const [isModalOpen,setModalOpen]= useState(false)
    const [isRejected,setIsRejected]= useState(false)


  return (
    <>
      <Box sx={{ width: '100%',backgroundColor:modeColor, display: 'flex', flexDirection: 'row', height: { md: '100vh', sm: 'auto' } }}>
        <SideBar
          isDrawerOpen={isDrawerOpen}
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen ? 200 : 0}
          />
        <Box sx={{ display: 'flex', width: '100%', position: 'relative', flexDirection: 'column' }}>
          <Box sx={{ position: 'fixed', width: `${isDrawerOpen ? 100 : 100}%`, zIndex: 200 }}>
            <Header headerTitle={'Answer'} closeDrawer={() =>closeDrawer(prev => !prev)} />
          </Box>
          
          {answeredSurvey?.length>0?
             <Grid sx={{marginLeft:handleResponsiveness('-2%','5%'),height:'auto',marginTop:'80px',width:handleResponsiveness('100%','90%')}} container spacing={2}>
            {answeredSurvey?.map(data=>
                <Grid item xs={12} md={6}>
                  <DropDown 
                    key={data?.id}
                    isModalOpen={isModalOpen}
                    setModalOpen={setModalOpen}
                    isRejected={isRejected}
                    surveyId={data?.surveyId} 
                    data={data?.responses}
                    id={data?.id}
                    userId={data?.userId}
                    isVerified={data?.isPendingVerification}
                  />
                </Grid>    
            )}
            </Grid>:
             <Typography variant='h4' 
              sx={{color:isLightMode?'#1e1e1e':'#1e1e1e',marginTop:'80px',textAlign:'center'}}>
              There is no answer yet
              </Typography> 
             }
          </Box>
        </Box>

    {isModalOpen?
      <Modal>
        <Paper sx={{width:'400px',height:'200px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Typography sx={{width:'90%'}}>Are you sure you want to delete this responded survey?</Typography>
          <Box sx={{width:'70%',height:'50px',display:'flex',gap:'40px',marginTop:'30px'}}>
             <ButtonStyled 
               sx={{marginRight:'60px'}} 
               label={'No'} 
               btnHeight={'40px'}
               btnWidth={'120px'}
               setValue={()=>setModalOpen(false)}
               bgColor='#1A6CE8'/>
              
              <ButtonStyled 
               sx={{marginRight:'60px'}} 
               setValue={()=>setIsRejected(true)}
               label={'yes'} 
               btnHeight={'40px'}
               btnWidth={'120px'}
               bgColor='red'/>
          </Box>
        </Paper>
      </Modal>:''}   
        </>
  )
}

export default QuestionAnswered