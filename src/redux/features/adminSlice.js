import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../../api/axios';


axios.interceptors.request.use((req)=>{
    if(sessionStorage.getItem("admin")){
        req.headers.authorization = `Bearer ${(JSON.parse(sessionStorage.getItem("admin")).accessToken)}`
    }

  return req;
})





export const signUpAdmin = createAsyncThunk('admin/signUpAdmin',async({adminSignUpData,toast})=>{
    try {
         const response = await axios.post(`admins`,adminSignUpData)
         if(response){
            toast.success('new Admin SuccessFully created')      
            return response.data
         }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.error.details[0].message)    
    }
})



export const loginAdmin = createAsyncThunk('admin/loginAdmin',async({userData,toast,navigate})=>{
    try {
         const response = await axios.post(`admins/login`,userData)
         if(response){
            toast.success('well come back')
            navigate('/dashBoard')  
            return response.data
         }
    } catch (error) {
        
      toast.error(error.response.data.error.message)   
    }
})

export const getAllUsers = createAsyncThunk('admin/getAllUsers',async()=>{
    try {
         const response = await axios.get(`users`)
         if(response){
            console.log(response?.data)
            return response.data
         }
    } catch (error) {
        console.log(error.response.data.message)    
    }
})

export const getAllSurveyQuestions = createAsyncThunk('admin/getAllSurveyQuestions',async()=>{
    try {
         const response = await axios.get(`surveys`,
         {params:{filter:{where:{},include: ["questions"]}}})
         if(response){
           
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})

export const getAllAnsweredSurvey = createAsyncThunk('admin/getAllAnsweredSurvey',async()=>{
    try {
         const response = await axios.get(`surveyResponses`,
          {params:{filter:{include: ["responses"]}}})
         
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})

export const getConsultantAppointment = createAsyncThunk('admin/getConsultantAppointment',async()=>{
    try {
         const response = await axios.get(`consultees`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})


export const getAllAppointments = createAsyncThunk('admin/getAllAppointments',async()=>{
    try {
         const response = await axios.get(`appointments`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})


export const verifySurveyResponse=createAsyncThunk('admin/verifySurveyResponse',async({surveyId,toast})=>{
    try {
         const response = await axios.post(`surveyResponses/verifySurveyResponse`,surveyId)
         if(response){
            toast.success('successfully verified')
            return response.data
         }
    } catch (error) {
        console.log(error.response.data.message)    
    }
})

export const updateSurveyResponse=createAsyncThunk('admin/updateSurveyResponse',async({id,surveyData,toast})=>{
    try {
         const response = await axios.patch(`surveyResponses/${id}`,surveyData)
         if(response){
           console.log(response);
            toast.success('survey successfully updated')
            return response.data
         }
    } catch (error) {
        console.log(error.response.data.message)    
    }
})


export const deleteSurveyResponse=createAsyncThunk('admin/deleteSurveyResponse',async({id,toast})=>{
    try {
         const response = await axios.delete(`surveyResponses/${id}`)
         if(response){
            toast.success('successfully Deleted')
            return response.data
         }
    } catch (error) {
        console.log(error.response.data.message)    
    }
})

export const updatePassword=createAsyncThunk('admin/updatePassword',async({id,newPassword,toast})=>{
    try {
         const response = await axios.patch(`admins/${id}`,newPassword)
         if(response){
            toast.success('password successfully updated')
            return response.data
         }
    } catch (error) {
        console.log(error.response.data.message)    
    }
})


export const restAdminPassword = createAsyncThunk('auth/restAdminPassWord',async({toast,newPassword})=>{
  
  try {
         const response = await axios.patch(`admins/resetPassword`,newPassword)
         if(response){
            toast.success('your password successfully rested')
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})


export const findSAdminPhoneNumber = createAsyncThunk('auth/findAdminPhoneNumber',async({
  toast,navigate,phoneNumber,onSignUp,navigateTo})=>{
  
  try {
        const response = await axios.get(`admin/phoneNumberExists/${phoneNumber}`)
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




export const adminSlice= createSlice({
    name:'admin',
    initialState:{
      admins:[],
      survey:[],
      usersFeedBacks:[],
      generatedSurvey:[], 
      answeredSurvey:[],   
      consultantUserList:[],
      userStaticData:[],
      appointmentList:[],
      isDrawerOpened:false,
      loading:false,
      isAdminLoggedIn:false,
      navTitle:'dashboard/adminHome',
      users:[],
      isAdmin:false,
      modeColor:'white',
      isDrawerOpen:true,
      navigateTo:''
},
  reducers:{
    logOut:(state,action)=>{
      state.isAdminLoggedIn=false
      state.isAdmin=false
      sessionStorage.removeItem('admin')
      state.survey=[]
      state.usersFeedBacks=[]
      state.generatedSurvey=[] 
      state.answeredSurvey=[]   
      state.consultantUserList=[]
      state.userStaticData=[]
      state.appointmentList=[]
      state.loading=false
      state.isAdminLoggedIn=false
      state.navTitle='dashboard/adminHome'
    },
     setMode:(state,action)=>{
       state.isLightMode=!state.isLightMode
    },
     closeDrawer:(state,action)=>{
       state.isDrawerOpen=!state.isDrawerOpen
    },
    setNavTitle:(state,action)=>{
        state.navTitle=action.payload
    },
    setNavigate:(state,action)=>{
        state.navigateTo=action.payload
    }

  },
  extraReducers:{
    [signUpAdmin.pending]:(state,action)=>{
      state.loading=true
    },
    [signUpAdmin.fulfilled]:(state,action)=>{
      state.loading=false
    },
    [signUpAdmin.rejected]:(state,action)=>{
         state.loading=false
    },
    [loginAdmin.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=false
      state.isAdmin=false
    },
    [loginAdmin.fulfilled]:(state,action)=>{
      state.admins=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
      state.isAdmin=true
      sessionStorage.setItem('admin',JSON.stringify({...action.payload}))
    },
    [loginAdmin.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=false
      state.isAdmin=false
    },


    [getAllUsers.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [getAllUsers.fulfilled]:(state,action)=>{
      state.users=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
    },
    [getAllUsers.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
    },

    [getAllSurveyQuestions.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [getAllSurveyQuestions.fulfilled]:(state,action)=>{
      state.generatedSurvey=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
    },
    [getAllSurveyQuestions.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
    },

    [getAllAnsweredSurvey.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [getAllAnsweredSurvey.fulfilled]:(state,action)=>{
      state.answeredSurvey=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
    },
    [getAllAnsweredSurvey.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
    },

    
    [getConsultantAppointment.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [getConsultantAppointment.fulfilled]:(state,action)=>{
      state.consultantUserList=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
    },
    [getConsultantAppointment.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
    },

    [getAllAppointments.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [getAllAppointments.fulfilled]:(state,action)=>{
      state.appointmentList=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
    },
    [getAllAppointments.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
    },

    [deleteSurveyResponse.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
    },


     [deleteSurveyResponse.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [deleteSurveyResponse.fulfilled]:(state,action)=>{
      return{
        ...state,answeredSurvey:state.answeredSurvey.filter(item=>item.id!==action.payload)
      }
    },
    [deleteSurveyResponse.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
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
  }

})

export const {
  logOut,
  setNavigate,
  setMode,
  setNavTitle,
  closeDrawer
}= adminSlice.actions
export const adminReducer=adminSlice.reducer