import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

// export const signUp = createAsyncThunk('auth/signUp',async({userData,toast,navigate})=>{
//     try {
    
//          const response = await axios.post('https://infinity-api-oqlt.onrender.com/signUp',userData)
//          if(response){
//             toast.success('your account is successfully created')
//             navigate('/')
//             return response.data
//          }
//     } catch (error) {
//         toast.error(error.response.data.error)    
//     }
// })


axios.interceptors.request.use((req)=>{
    if(localStorage.getItem("admin")){
        req.headers.authorization = `Bearer ${(JSON.parse(localStorage.getItem("admin")).accessToken)}`
    }

  return req;
})



const testUrl='https://infinity-api-oqlt.onrender.com/loginAdmin'

const realBasicUrl='http://localhost:3000/'


export const signUpAdmin = createAsyncThunk('admin/signUpAdmin',async({adminSignUpData,toast})=>{
    try {
         const response = await axios.post(`${realBasicUrl}admins`,adminSignUpData)
         if(response){
            toast.success('new Admin SuccessFully created')
           
            return response.data
         }
    } catch (error) {
       
        toast.error(error.response.data.message)    
    }
})



export const loginAdmin = createAsyncThunk('admin/loginAdmin',async({userData,toast,navigate})=>{
    try {
         const response = await axios.post(`${realBasicUrl}/admins/login`,userData)
         if(response){
            toast.success('well come back')
            navigate('/dashBoard')
            
            return response.data
         }
    } catch (error) {
       
        toast.error(error.response.data.message)    
    }
})

export const getAllUsers = createAsyncThunk('admin/getAllUsers',async()=>{
    try {
         const response = await axios.get(`${realBasicUrl}/users`)
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
         const response = await axios.get(`http://localhost:3000/surveys`,
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
         const response = await axios.get(`${realBasicUrl}surveyResponses`,
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
         const response = await axios.get(`${realBasicUrl}consultees`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})


export const getAllAppointments = createAsyncThunk('admin/getAllAppointments',async()=>{
    try {
         const response = await axios.get(`${realBasicUrl}appointments`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})


export const verifySurveyResponse=createAsyncThunk('admin/verifySurveyResponse',async({surveyId,toast})=>{
    try {
         const response = await axios.post(`${realBasicUrl}surveyResponses/verifySurveyResponse`,surveyId)
         if(response){
            toast.success('successfully verified')
            return response.data
         }
    } catch (error) {
        console.log(error.response.data.message)    
    }
})

export const deleteSurveyResponse=createAsyncThunk('admin/deleteSurveyResponse',async({id,toast})=>{
    try {
         const response = await axios.delete(`${realBasicUrl}surveyResponses/${id}`)
         if(response){
            toast.success('successfully Deleted')
            return response.data
         }
    } catch (error) {
        console.log(error.response.data.message)    
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
      appointmentList:[],
      isDrawerOpened:false,
      loading:false,
      isAdminLoggedIn:false,
      navTitle:'dashboard/adminHome',
      users:[],
      isAdmin:false,
      modeColor:'white'
},
  reducers:{
    logOut:(state,action)=>{
      state.isAdminLoggedIn=false
      state.isAdmin=false
      localStorage.removeItem('admin')
      state.survey=[]
      state.usersFeedBacks=[]
      state.generatedSurvey=[] 
      state.answeredSurvey=[]   
      state.consultantUserList=[]
      state.appointmentList=[]
      state.loading=false
      state.isAdminLoggedIn=false
    },
     setMode:(state,action)=>{
       state.isLightMode=!state.isLightMode
    },
    setNavTitle:(state,action)=>{
        state.navTitle=action.payload
    },

  },
  extraReducers:{
    [signUpAdmin.pending]:(state,action)=>{
      state.loading=true
    },
    [signUpAdmin.fulfilled]:(state,action)=>{
      state.admins=action.payload
      state.loading=false
      state.isLoggedIn=true
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
      localStorage.setItem('admin',JSON.stringify({...action.payload}))
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
  }

})

export const {logOut,setMode,setNavTitle}=adminSlice.actions
export const adminReducer=adminSlice.reducer