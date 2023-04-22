import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios, { imageUploadAxios } from '../../api/axios';
import Cookies from 'universal-cookie'; 

const cookies = new Cookies();
 

axios.interceptors.request.use((req)=>{
    if(sessionStorage.getItem("user")){
        req.headers.authorization = `Bearer ${(JSON.parse(sessionStorage.getItem("user")))}`
    }
  return req;
})

imageUploadAxios.interceptors.request.use((req)=>{
    if(sessionStorage.getItem("user")){
        req.headers.authorization = `Bearer ${(JSON.parse(sessionStorage.getItem("user")))}`
    }
  return req;
})


export const signUp = createAsyncThunk('auth/signUp',async({userData,toast,navigate})=>{
    try {
    
         const response = await axios.post(`users/signUp`,userData)
         if(response){
            toast.success('your account is successfully created')
            navigate('/login')
            return response.data
         }
    } catch (error) {
         toast.error(error.response.data.error.message)      
    }
})


export const signIn = createAsyncThunk('auth/signIn',async({userData,navigate,toast})=>{
    try {
         const response = await axios.post(`users/login`,userData,{withCredentials:true})
         if(response){
            toast.success('well come back')
            navigate('/userProfileFiller')
            return response.data
         }
    } catch (error) {
        toast.error(error.response.data.error.message)    
    }
})


export const getAllSurvey = createAsyncThunk('auth/getAllSurvey',async()=>{
    try {
         const response = await axios.get(`surveys`,{params:{filter:{where:{},include: ["questions"]}}})
         if(response){
           return response.data
         }
    } catch (error) {
        console.log(error.response.data.error)  
    }
})


export const uploadImage = createAsyncThunk('auth/uploadImage',async({formData})=>{
    try { 
         const response = await imageUploadAxios.post(`files/uploadFiles`,formData)
         if(response){  
           return response.data
         }
    } catch (error) {
        console.log(error.response.data.error)  
    }
})


export const sendFeedBack = createAsyncThunk('auth/sendFeedBack',async({feedBackData,toast})=>{
    try {
         const response =await axios.post(`feedbacks`,feedBackData)
         if(response){
            toast.success('your feedback successfully submitted')
            return response.data
         }
    } catch (error) {
        toast.error(error.response.data.error)  
    }
})

export const sendSurveyAnswer = createAsyncThunk('auth/sendSurveyAnswer',async({userSurveyAnswerData,toast})=>{
    
  try {
         const response = await axios.post(`surveyResponses/fillSurvey`,userSurveyAnswerData)
         if(response){
            toast.success('Your answer successfully submitted')
            return response.data
         }
    } catch (error) {
       
        toast.error(error.response.data.error.message)      
    }
})


export const getUserStaticData = createAsyncThunk('auth/getUserStaticData',async()=>{
  
  try {
         const response = await axios.get(`users/fetchStatics`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})


export const getUserProfileData = createAsyncThunk('auth/getUserProfileData',async({id})=>{

  try {
         const response = await axios.get(`users/${id}`)
         if(response){   
            return response.data
         }
    } catch (error) {
        console.log(error.response.data.error)    
    }
})



export const editUserProfile = createAsyncThunk('auth/editUserProfile',async({id,toast,navigate,userProfileEditedData})=>{
  console.log(id);
  try {
         const response = await axios.patch(`users/${id}`,userProfileEditedData)
         if(response){
            toast.success('your profile successfully updated')
            navigate('/profile')
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})




export const createAppointment = createAsyncThunk('auth/createAppointment',async({toast,appointmentData})=>{
  
  try {
         const response = await axios.post(`appointments`,appointmentData)
         if(response){
            toast.success('your Appointment successfully sent')
           
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})

export const createPersonalAppointment = createAsyncThunk('auth/createPersonalAppointment',async({toast,userData})=>{

  try {
         const response = await axios.post(`consultees`,userData)
         if(response){
            toast.success('your personal Appointment successfully sent')
           
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})

export const restPassword = createAsyncThunk('auth/restPassWord',async({navigate,toast,newPasswordData})=>{
  
  try {
         const response = await axios.post(`users/resetPassword`,newPasswordData)
         if(response){
            toast.success('your password successfully rested')
            navigate('/login')
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})



export const findPhoneNumber = createAsyncThunk('auth/findPhoneNumber',async({
  toast,navigate,phoneNumber,onSignUp,navigateTo,restIdentifier})=>{
  
  try {
        const response = await axios.get(`users/phoneNumberExists/${phoneNumber}`)
          if(response.data){
            if(restIdentifier==='signUp'){
              toast.error("user existed")
               navigate(`/${navigateTo}`) 
            }else onSignUp()   
          }else {
            if(restIdentifier==='signUp'){
              onSignUp()
            }else{
             toast.error("user doesn't exist") 
             navigate(`/${navigateTo}`) 
          }
          }
          return response.data
        
    } catch (error) {
        toast.error(error.response.data)    
    }
})

export const findConsulterPhoneNumber = createAsyncThunk('auth/findConsulterPhoneNumber',async({
  toast,navigate,phoneNumber,onSignUp,navigateTo})=>{
    alert('I was here')
  try {
        const response = await axios.get(`consultees/phoneNumberExists/${phoneNumber}`)
          if(response.data){
           onSignUp()   
          }else {
             toast.error("user doesn't exist") 
             navigate(`/${navigateTo}`)  
          }
          return response.data
        
    } catch (error) {
        toast.error(error.response.data)    
    }
})

export const getMyWalletBalance = createAsyncThunk('auth/getMyWalletBalance',async()=>{
  
  try {
         const response = await axios.get(`wallets/myStats`)
        
         return response.data
        
    } catch (error) {
        console.log(error.response.data)    
    }
})




export const authSlice= createSlice({
    name:'auth',
    initialState:{
      users:[],
      userSurveyAnswer:[],
      userStaticData:[],
      loading:false,
      isUserLoggedIn:false,
      isLightMode:true,
      modeColor:'white',
      survey:[],
      userProfileData:[],
      surveyDetailValue:[],
      isUserExist:false,
      isUserVerified:false,
      myWalletBalance:[],
      uploadImageUrl:{},
      isImageLoading:false,
      isPhoneNumberExist:false,
      navigateTo:'',
      navIdentifier:'',
      userLoginData:{},
      isSignUpVerified:false,
      isAppointmentVerified:false,
      signUpNumber:''
},
  reducers:{
    logOut:(state,action)=>{
      sessionStorage.removeItem('user')
      state.users=[]
      state.userSurveyAnswer=[]
      state.userStaticData=[]
      state.loading=false
      state.isUserLoggedIn=false
      state.isLightMode=true
      state.survey=[]
      state.modeColor='white'
      state.uploadImageUrl={}
      cookies.remove('user')
      state.isSignUpVerified=false
      state.isAppointmentVerified=false
    },
     setMode:(state,action)=>{
       state.isLightMode=!state.isLightMode
       if(!state.isLightMode){
         state.modeColor='#1E1E1E'
       }else state.modeColor='white'
    },
    
    setUserSignUpData:(state,action)=>{
       return {...state,userSignUpData:{...state.userSignUpData,"value":action.payload}}
    },
    getSurveyValue:(state,action)=>{
          state.surveyDetailValue=action.payload
    },
    setNavigateValue:(state,action)=>{
          state.navigateTo=action.payload
    },
    setNavigateIdentifier:(state,action)=>{
          state.navIdentifier=action.payload
    },
    setSignUpVerification:(state,action)=>{
          state.isSignUpVerified=action.payload
    },
    setAppointmentVerification:(state,action)=>{
          state.isAppointmentVerified=action.payload
    },
     setSignUpNumber:(state,action)=>{
          state.signUpNumber=action.payload
    }
  },
  extraReducers:{
    [signUp.pending]:(state,action)=>{
      state.loading=true
    },
    [signUp.fulfilled]:(state,action)=>{
      state.users=action.payload
      state.loading=false
    },
    [signUp.rejected]:(state,action)=>{
         state.loading=true
    },

    [signIn.pending]:(state,action)=>{
      
      state.isUserLoggedIn=false
    },
    [signIn.fulfilled]:(state,action)=>{
      state.users=action.payload
      state.isUserLoggedIn=true
      let {id,email,firstName,lastName}=action.payload
      state.userData={id,email,firstName,lastName}
      sessionStorage.setItem('user',JSON.stringify(action.payload.accessToken))
      cookies.set('user',action.payload.refreshToken,{ path: '/' });
    },
    [signIn.rejected]:(state,action)=>{
        state.isUserLoggedIn=false
       
    },

    [getAllSurvey.pending]:(state,action)=>{
      state.loading=true
    
    },
    [getAllSurvey.fulfilled]:(state,action)=>{
      state.survey=action.payload
      state.loading=false
    
    },
    [getAllSurvey.rejected]:(state,action)=>{
         state.loading=false
         
    },

    [sendSurveyAnswer.pending]:(state,action)=>{
      state.loading=true
    },
    [sendSurveyAnswer.fulfilled]:(state,action)=>{
      state.userSurveyAnswer=action.payload
      state.loading=false
    },
    [sendSurveyAnswer.rejected]:(state,action)=>{
         state.loading=false
    },

    [getUserStaticData.pending]:(state,action)=>{
        state.loading=true
    },
    [getUserStaticData.fulfilled]:(state,action)=>{
      state.userStaticData=action.payload
      state.loading=false
   
    },
    [getUserStaticData.rejected]:(state,action)=>{
      state.loading=true
    },

    [getUserProfileData.pending]:(state,action)=>{
      state.loading=true
    },
    [getUserProfileData.fulfilled]:(state,action)=>{
      state.userProfileData=[action.payload]
      state.loading=false
    },
    [getUserProfileData.rejected]:(state,action)=>{
         state.loading=true
    },

    [editUserProfile.pending]:(state,action)=>{
      state.loading=true
    },
    [editUserProfile.fulfilled]:(state,action)=>{
      state.userProfileData=[action.payload]
      state.loading=false
    },
    [editUserProfile.rejected]:(state,action)=>{
         state.loading=true
    },


    [findPhoneNumber.pending]:(state,action)=>{
      state.loading=true
    },
    [findPhoneNumber.fulfilled]:(state,action)=>{
      state.isPhoneNumberExist=action.payload
      state.loading=false
    },
 

    [getMyWalletBalance.pending]:(state,action)=>{
      state.loading=true
    },
    [getMyWalletBalance.fulfilled]:(state,action)=>{
      state.myWalletBalance=action.payload
      state.loading=false
    },
    [getMyWalletBalance.rejected]:(state,action)=>{
         state.loading=true
    },

    [uploadImage.pending]:(state,action)=>{
      state.isImageLoading=true
    },
    [uploadImage.fulfilled]:(state,action)=>{
      state.uploadImageUrl=action.payload
      state.isImageLoading=false
    },
    [uploadImage.rejected]:(state,action)=>{
         state.isImageLoading=false
    },
    
  }

})

  export const {
    logOut,
    setMode,
    setUserLoginState,
    setUserSignUpData,
    getSurveyValue,
    setNavigateValue,
    setNavigateIdentifier,
    setSignUpVerification,
    setAppointmentVerification,
    setSignUpNumber
  }=authSlice.actions

 export const authReducer=authSlice.reducer