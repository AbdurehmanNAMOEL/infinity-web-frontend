import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'



axios.interceptors.request.use((req)=>{
    if(localStorage.getItem("user")){
        req.headers.authorization = `Bearer ${(JSON.parse(localStorage.getItem("user")).accessToken)}`
    }

  return req;
})

const testUrl='https://infinity-api-oqlt.onrender.com/signUp'

const realBasicUrl='http://localhost:3000/users'

export const signUp = createAsyncThunk('auth/signUp',async({userData,toast,navigate})=>{
    try {
    
         const response = await axios.post(`${realBasicUrl}/signUp`,userData)
         if(response){
            toast.success('your account is successfully created')
            navigate('/login')
            return response.data
         }
    } catch (error) {
         navigate('/signUp')
        toast.error(error.response.data.error)    
    }
})


export const signIn = createAsyncThunk('auth/signIn',async({userData,toast,navigate})=>{
    try {
         const response = await axios.post(`${realBasicUrl}/login`,userData)
         if(response){
            toast.success('well come back')
            navigate('/userProfileFiller')
            return response.data
         }
    } catch (error) {
       
        toast.error(error.response.data.error)    
    }
})


export const getAllSurvey = createAsyncThunk('auth/getAllSurvey',async()=>{
    try {
         const response = await axios.get('https://infinity-api-oqlt.onrender.com/getAllQuestion')
         if(response){
            return response.data
         }
    } catch (error) {
        console.log(error.response.data.error)  
    }
})


export const sendFeedBack = createAsyncThunk('auth/sendFeedBack',async({feedBackData,toast})=>{
    try {
         const response =await axios.post(`http://localhost:3000/feedbacks`,feedBackData)
         if(response){
            toast.success('your feedback successfully submitted')
            return response.data
         }
    } catch (error) {
        toast.error(error.response.data.error)  
    }
})

export const sendSurveyAnswer = createAsyncThunk('auth/sendSurveyAnswer',async({userSurveyAnswerData,toast})=>{
    console.log(userSurveyAnswerData);  
  try {
         const response = await axios.post(`https://infinity-api-oqlt.onrender.com/newAnswer`,userSurveyAnswerData)
         if(response){
            toast.success('Your answer successfully submitted')
            return response.data
         }
    } catch (error) {
       
        toast.error(error.response.data.error)    
    }
})


export const getUserStaticData = createAsyncThunk('auth/getUserStaticData',async()=>{
  
  try {
         const response = await axios.get(`http://localhost:3000/users/fetchStatics`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})


export const getUserProfileData = createAsyncThunk('auth/getUserProfileData',async({id})=>{
   console.log(id)
  try {
         const response = await axios.get(`http://localhost:3000/users/${id}`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})



export const editUserProfile = createAsyncThunk('auth/editUserProfile',async({id,toast,userProfileEditedData,navigate})=>{
  console.log(typeof(id),userProfileEditedData);
  try {
         const response = await axios.patch(`http://localhost:3000/users/${id}`,userProfileEditedData)
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
         const response = await axios.post(`http://localhost:3000/appointments`,appointmentData)
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
         const response = await axios.post(`http://localhost:3000/consultees`,userData)
         if(response){
            toast.success('your personal Appointment successfully sent')
           
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})




export const authSlice= createSlice({
    name:'auth',
    initialState:{
      users:[],
      userSurveyAnswer:[],
      userStaticData:[],
      loading:false,
      isLoggedIn:false,
      isLightMode:true,
      modeColor:'white',
      survey:[],
      userProfileData:[]
},
  reducers:{
    logOut:(state,action)=>{
      state.isLoggedIn=false
      localStorage.removeItem('user')
      state.users=[]
      state.userSurveyAnswer=[]
      state.userStaticData=[]
      state.loading=false
      state.isLoggedIn=false
      state.isLightMode=true
      state.survey=[]
    },
     setMode:(state,action)=>{
       state.isLightMode=!state.isLightMode
       if(!state.isLightMode){
         state.modeColor='#1E1E1E'
       }else state.modeColor='white'
    }
  },
  extraReducers:{
    [signUp.pending]:(state,action)=>{
      state.loading=true
    },
    [signUp.fulfilled]:(state,action)=>{
      state.users=action.payload
      state.loading=false
      state.isLoggedIn=true
    },
    [signUp.rejected]:(state,action)=>{
         state.loading=false
    },

    [signIn.pending]:(state,action)=>{
      state.loading=true
    },
    [signIn.fulfilled]:(state,action)=>{
      state.users=action.payload
      state.loading=false
      state.isLoggedIn=true
      localStorage.setItem('user',JSON.stringify({...action.payload}))
    },
    [signIn.rejected]:(state,action)=>{
         state.loading=false
    },

    [getAllSurvey.pending]:(state,action)=>{
      state.loading=true
    },
    [getAllSurvey.fulfilled]:(state,action)=>{
      state.survey=action.payload
      state.loading=false
      state.isLoggedIn=true
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
      state.isLoggedIn=true
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
      state.isLoggedIn=true
    },
    [getUserStaticData.rejected]:(state,action)=>{
         state.loading=false
    },

    [getUserProfileData.pending]:(state,action)=>{
      state.loading=true
    },
    [getUserProfileData.fulfilled]:(state,action)=>{
      state.userProfileData=[action.payload]
      state.loading=false
      state.isLoggedIn=true
    },
    [getUserProfileData.rejected]:(state,action)=>{
         state.loading=false
    },

    [editUserProfile.pending]:(state,action)=>{
      state.loading=true
    },
    [editUserProfile.fulfilled]:(state,action)=>{
      state.userProfileData=[action.payload]
      state.loading=false
      state.isLoggedIn=true
    },
    [editUserProfile.rejected]:(state,action)=>{
         state.loading=false
    },
    
  }

})

  export const {logOut,setMode}=authSlice.actions

 export const authReducer=authSlice.reducer