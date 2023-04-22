import { Box, Card, CardMedia, Divider,Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LogoImage from '../../../assets/image/logo.png'
import ActionButton from '../../components/ActionButton'
import InputField from '../../components/InputField'
import { handleResponsiveness, signUpStyle } from '../styles/signUpStyle'
import signUpImage from '../../../assets/image/signUp.svg'
import MediaCard from '../../components/MediaCard'
import DataBaseImage from '../../../assets/image/dataBase.png'
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import {  setSignUpNumber, setSignUpVerification, signUp } from '../../../redux/features/authSlice'
import InputSelector from '../../../shared/Components/InputSelector'
import { genderList } from '../../utils/selectorData'
import { useNavigate } from 'react-router-dom'
import PhoneNumberVerifierPage from '../auth-rest/pages/PhoneNumberVerifierPage'


 const SignUp = () => {
   const navigate = useNavigate()
   const dispatch= useDispatch()
   const {isSignUpVerified,signUpNumber}= useSelector(state=>state.auth)
   const [isFormValid,setFormValidation]=useState(false)
   const [isUserAgreed,setUserAgreed] = useState(false)
   const [isBtnDisabled,setIsBtnDisabled] = useState(true) 
   const [confirmPassword,setConfirmPasswordValue]=useState('')
   const [userData,setUserData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:signUpNumber,
    password:"",
    gender:"",
   })

   
   const handleSubmit=()=>{
    
     if(userData.firstName!=='' && userData.lastName!==''&& confirmPassword!==''
       && userData.phoneNumber!=='' && userData.email!==''
       &&userData.password!==''&& userData.gender!==''){

        if(userData.password===confirmPassword){
            dispatch(signUp({userData,toast,navigate}))
            setFormValidation(true)
            setUserData({firstName:'',lastName:'',phoneNumber:'',email:'',
              password:'',gender:''})    
       }else toast.error('password and confirmPassword must be the same')
      }else setFormValidation(false)
     dispatch(setSignUpVerification(false))  
     dispatch(setSignUpNumber(''))
   }
  
        
  useEffect(()=>{
     console.log(isFormValid)
     console.log(userData.firstName);
     if(userData.firstName!=='' && userData.lastName!==''&& confirmPassword!==''
       && userData.phoneNumber!=='' && userData.email!==''
       &&userData.password!==''&& userData.gender!==''&& isFormValid && isUserAgreed){
        setIsBtnDisabled(false)
       }else setIsBtnDisabled(true)
  },[userData,confirmPassword,isFormValid,isUserAgreed])

  

  const handlePrivacyPolicy=()=>{
     window.open('/policy')
     
  }

  console.log(isSignUpVerified);
  return ( 
    <>
    {isSignUpVerified?<Box sx={signUpStyle.signUpMainContainer}>
        <Paper sx={signUpStyle.signUpLeftContainer}>
          <div id='recaptcha-container'></div>
            <Box sx={signUpStyle.companyName}>
            <MediaCard 
               mediaWidth={'30px'} 
               mediaHeight={'35px'} 
               imgUrl={DataBaseImage}
              />
              <Typography 
                animate={{ x: [400,0] }} 
                transition = {{ ease: "easeInOut", duration: 2 }} 
                 sx={
                  {
                    fontSize:'13px',
                    marginLeft:'5px',
                    width:'200px',
                    color:'rgba(0,0,0,0.5)',
                    fontWeight:'bold',
                    cursor:'pointer'
                }}>
                  INFINITY CONSULTANCY AND TRANING FIRM
             </Typography>
           </Box>
           
         
             <Box sx={signUpStyle.signUpCardContainer}>
                <Paper sx={signUpStyle.signUpCard}>
                    <Box sx={signUpStyle.signUpTitleContainer}>
                      <Typography 
                         variant='h5' 
                         sx={{
                          color:'rgba(0,0,0,0.5)',
                          fontWeight:'bold',
                          fontFamily:'Poppins',
                          marginBottom:'20px'
                          
                          }}>SignUp</Typography>
                    </Box>
                    <Divider sx={{width:'80%',marginLeft:'10%'}}/>
                     <Box sx={signUpStyle.signUpNameInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'FirstName'}
                      setValidation={setFormValidation}
                      type='name'
                      inputValue={userData.firstName}
                      setValue={(e)=>setUserData({...userData,"firstName":e.target.value})}
                    />
                     <InputField 
                      inputLabel={'LastName'}
                      setValidation={setFormValidation}
                      type='name'
                      inputValue={userData.lastName}
                      setValue={(e)=>setUserData({...userData,"lastName":e.target.value})}
                    />
                    </Box>
                    {/* <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Phone Number'}
                      type='phoneNumber'
                      setValidation={setFormValidation}
                      inputValue={userData.phoneNumber}
                      setValue={(e)=>setUserData({...userData,"phoneNumber":e.target.value})}
                    />
                    </Box> */}
                       <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Email'}
                      type='email'
                      setValidation={setFormValidation}
                      inputValue={userData.email}
                      setValue={(e)=>setUserData({...userData,"email":e.target.value})}
                    />
                    </Box>
                    <Box sx={signUpStyle.signUpGenderContainer}>                    
                    <InputSelector 
                      setValue={(e)=>setUserData({...userData,"gender":e.target.value})}
                      optionList={genderList} 
                      optionTitle={'title'}
                      optionValue={'value'}
                      label={'Gender'} 
                      
                      inputValue={userData?.gender}
                      selectorWidth={'97%'}/>
                    </Box>
                       <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'password'}
                      type='password'
                      setValidation={setFormValidation}
                      inputValue={userData.password}
                      setValue={(e)=>setUserData({...userData,"password":e.target.value})}
                    />
                    </Box>
                      <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'ConfirmPassword'}
                      type='password'
                      setValidation={setFormValidation}
                      inputValue={confirmPassword}
                      setValue={(e)=>setConfirmPasswordValue(e.target.value)}
                    />
                    </Box>  
                    <Box sx={{marginTop:'28px',cursor:'pointer',fontSize:'14px', gap:'5px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <input onChange={()=>setUserAgreed(prev=>!prev)} type={'checkBox'}/>
                      <p>Do you agree</p>
                      <Typography onClick={handlePrivacyPolicy} style={{textDecoration:'none',color:'#1A6CE8',fontSize:'14px'}}>Privacy policy and term of service</Typography>
                    </Box>              
                    <Box sx={signUpStyle.signUpButtonContainer}>    
                     <ActionButton
                       isBtnDisabled={isBtnDisabled}
                       btnLabel='signUp'
                       btnWidth={'80%'}
                       setValidation={setFormValidation}
                       onClick={handleSubmit}
                      />
                    </Box>
                  <Divider sx={{marginTop:'20px'}}/>     
                     <Box sx={signUpStyle.createAccountLabelContainer}>
                      <Typography>Already have an account?</Typography>
                      <Typography 
                       onClick={()=>navigate('/login')}
                       sx={
                        {
                          fontSize:'15px',
                          marginLeft:'5px', 
                          color:'#1A6CE8',
                          cursor:'pointer'
                          }
                        }>
                         SignIn
                      </Typography>
                    </Box> 
                </Paper>
             </Box>
        </Paper>
     
        <Paper sx={signUpStyle.signUpRightContainer}>
             
           <Box sx={
            {
              width:'100%',
              height:handleResponsiveness('auto','80vh'),
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column',
              marginTop:'100px',
           
              }
           }>

      <Box onClick={()=>navigate('/home')} sx={signUpStyle.companyLogo}>
                 <MediaCard
                 mediaHeight={'100%'}
                 mediaWidth={'90%'}
                 imgUrl={LogoImage}
               />
               {/* <IconButton onClick={()=>setIsSideBarOpen(prev=>!prev)}>
                  <MenuOutlined/>
               </IconButton> */}
             </Box> 
               <Card 
                 sx={
                  {
                    width:'100%',
                    height:{xs:'40vh',md:'60vh'},
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    boxShadow:'none',
                    borderRadius:'0',
                    marginTop:handleResponsiveness('50px','100px'),
                    zIndex:1000,
                    backgroundColor:'rgba(0,0,0,0)',
                    
                    }}>
                <CardMedia 
                  image={signUpImage} 
                   sx={{
                    width:handleResponsiveness('80%','40%'),
                    height:'100%'
                  }}
                   />
               </Card>


        <Typography
            sx={
                {
                  textAlign:'center',
                  fontFamily:'Poppins',
                  color:'rgba(0,0,0,0.6)',
                  fontWeight:'bold',
                  fontSize:{xs:'20px',md:'27px'}
               
                }}>
             Renovate the world of Data through 
                </Typography>
              <Typography 
               variant='h4'
               sx={
                {
                  textAlign:'center',
                  fontFamily:'Poppins',
                  color:'#1A6CE8',
                  fontWeight:'bold',
                  marginBottom:'50px',
                  fontSize:{xs:'20px',md:'27px'}
               
                }}
               >intelligence for better decisions!</Typography>
           </Box>
         
        </Paper>
     
    </Box>:<PhoneNumberVerifierPage
      navigateTo={'login'}
      secondNavigate={'signUp'}
      restIdentifier={'signUp'}
     />}
    </>
  
    
  )
}

const style={
  verificationPasswordContainer:{
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
   
    gap:'20px'
  },
 verificationPasswordCard:{
    width:handleResponsiveness('95%','400px'),
    height:'250px',
    borderRadius:'5px',
    border:'solid 1px rgba(0,0,0,0.4)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'25px',
    marginTop:'30px'
  },

  companyLogoContainer:{
   width:'120px',
   height:'70px',
   marginLeft:'40px',
   marginTop:'40px'
  },
  companyLogoImage:{
    width:'100%',
    height:'100%'
  },
  btnContainer:{
    width:'76%',
    height:'40px',
    borderRadius:'0px',
    backgroundColor:'#1A6CE8',
     '&:hover':{
        backgroundColor:'#1A6CE8'           
      },

    fontSize:'16px',
    color:'white',
    display:'flex',
    gap:'10px',
    cursor:'pointer',
    marginLeft:'-4%'     
  },
  cardContainer:{
    width:'100%',
    height:'90%',
    display:'flex',
    justifyContent:'center'
  }
}
 

export default SignUp