import { Box, Card, CardMedia, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LogoImage from '../../assets/image/logo.png'
import ButtonStyled from '../components/ButtonStyled'
import TextArea from '../components/TextArea'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useDispatch, useSelector } from 'react-redux'
import InputSelector from '../../shared/Components/InputSelector'
import { feedBackGroupList } from '../utils/selectorData'
import { sendFeedBack } from '../../redux/features/authSlice'
import {toast} from 'react-toastify'
import ActionButton from '../components/ActionButton'
import { userFeedBackStyle } from './style/userFeedback'
import { handleResponsiveness } from '../auth/styles/loginStyle'

const UserFeedBack = () => {
    const navigate = useNavigate()
    const {modeColor,userData}= useSelector(state=>state.auth)
    const [feedBack,setFeedBack] = useState('')
    const [feedBackGroup,setFeedBackGroup] = useState('')
    const [isBtnDisabled,setIsBtnDisabled] = useState(false)
    const dispatch = useDispatch()

  const handleFeedBack=()=>{
      let feedBackData={
        "feedbackGroup":feedBackGroup,
        "suggestion":feedBack,
        'userId':userData?.id
      }
      dispatch(sendFeedBack({feedBackData,toast}))
      setFeedBack('')
      setFeedBackGroup('')
    }

   useEffect(()=>{
      if(feedBackGroup !=='' && feedBack!==''){
        setIsBtnDisabled(false)
      }else setIsBtnDisabled(true)
    },[feedBack,feedBackGroup])

  return (
   <Box sx={userFeedBackStyle.contactContainer}>
     <Box sx={userFeedBackStyle.contactLeftContainer}>
        <Box sx={[userFeedBackStyle.logoContainer,{backgroundColor:modeColor}]}>
            <Card  onClick={()=>navigate('/')} 
              sx={{backgroundColor:modeColor,cursor:'pointer',width:'200px',
                  height:'150px',boxShadow:'none'}}>
                <CardMedia
                   sx={{width:'100%',height:'100%'}}
                   image={LogoImage}
                />
            </Card>
            <Box sx={userFeedBackStyle.homeBtn}>
              <ButtonStyled 
                label={'Home'}
                bgColor='#0971f1'
                btnWidth={'120px'}
                buttonIcon={<HomeOutlinedIcon/>}
                setValue={()=>navigate('/')}
              />
            </Box>
        </Box>
        <Box sx={userFeedBackStyle.contactFormContainer}>
            <Paper sx={userFeedBackStyle.formContainer}>
               <Typography variant='h4' sx={{width:'80%',marginTop:'20px',marginBottom:'-40px'}}>
                   FeedBack
               </Typography>
                <Typography variant='h8' sx={{width:'80%',marginBottom:'-20px'}}>
                   Feel free to contact us any time. We will get back to
                   you as soon as we can
               </Typography>
                  <Box sx={userFeedBackStyle.feedBackGroupContainer}>                    
                    <InputSelector 
                      setValue={(e)=>setFeedBackGroup(e.target.value)}
                      optionList={feedBackGroupList} 
                      label={'your feed back on'} 
                      inputValue={feedBackGroup}
                      optionTitle={'title'}
                      optionValue={'value'}
                      selectorWidth={'97%'}/>
                    </Box>
               <Box sx={{width:'76.5%',marginLeft:'-18px'}}>
                <TextArea
                 textAreaWidth={'100%'}
                 textAreaHeight='100px'
                 placeholder={'message'}
                 setValue={(e)=>setFeedBack(e.target.value)}
                 inputValue={feedBack}
                />
                </Box>
                <Box sx={{width:'80%'}}>
                  <ActionButton
                   btnLabel={'Send'}
                   btnWidth={'96%'}
                   onClick={handleFeedBack}
                   isBtnDisabled={isBtnDisabled}
                />
                </Box>
            </Paper>
        </Box>
     </Box>
     <Box sx={userFeedBackStyle.contactRightContainer}>
       <Box onClick={()=>navigate('/')} 
         sx={{width:'100%',alignItems:'center',height:'70px',display:handleResponsiveness('none','flex')}}
         >
         <ArrowBackIosIcon sx={{marginLeft:'15px',color:'white',fontWeight:'bolder',cursor:'pointer'}}/>
         <ArrowBackIosIcon sx={{marginLeft:'-5px',color:'white',fontWeight:'bolder',cursor:'pointer'}}/>
         <Typography sx={{color:'white',cursor:'pointer'}}>Home</Typography>
       </Box>
       <Paper sx={userFeedBackStyle.infoContainer}>
          <Box sx={userFeedBackStyle.infoDirectContactContainer}>
            <Typography variant='h5' sx={{color:'white'}}>Info</Typography>
            <ButtonStyled
             label={'+251936970345'}
             bgColor='#333'
             shadow={'no'}
             btnWidth='180px'
             buttonIcon={<LocalPhoneOutlinedIcon/>}
            />
          </Box>
          <Box sx={userFeedBackStyle.infoSocialMediaContactContainer}>
            <Typography variant='h6' sx={{color:'white'}}>ContactUs Via</Typography>
             <ButtonStyled
             label={'Facebook'}
             bgColor='#333'
             shadow={'no'}
             btnWidth='180px'
             buttonIcon={<FacebookRoundedIcon/>}
            />
            <ButtonStyled
             label={'WhatsApp'}
             bgColor='#333'
             shadow={'no'}
             btnWidth='180px'
             buttonIcon={<WhatsAppIcon/>}
            />
            <ButtonStyled
             label={'Telegram'}
             bgColor='#333'
             shadow={'no'}
             btnWidth='180px'
             buttonIcon={<TelegramIcon/>}
            />
          </Box>
       </Paper>
     </Box>
   </Box>
  )
}

export default UserFeedBack