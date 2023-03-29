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


export const signUpAdmin = createAsyncThunk('admin/signUpAdmin',async({userData,toast})=>{
    try {
         const response = await axios.post(`${realBasicUrl}admins/signUp`,userData)
          console.log(response)
         if(response){
            toast.success('well come back')
           
            return response.data
         }
    } catch (error) {
       
        toast.error(error.response.data.error)    
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
       
        toast.error(error.response.data.error)    
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
        console.log(error.response.data.error)    
    }
})




export const createNewSurvey = createAsyncThunk('admin/createSurvey',async({surveyData,toast})=>{
    try {
         const response = await axios.post('https://infinity-api-oqlt.onrender.com/createQuestion',surveyData)
         if(response){
            toast.success('Survey Created successfully')
            return response.data
         }
    } catch (error) {
       
        toast.error(error.response.data.error)    
    }
})


export const getAllSurveyQuestions = createAsyncThunk('admin/getAllSurveyQuestions',async()=>{
    try {
         const response = await axios.get('https://infinity-api-oqlt.onrender.com/getAllQuestion')
         if(response){
           
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})



export const getAllFeedBacks = createAsyncThunk('admin/getAllFeedBack',async()=>{
    try {
         const response = await axios.get(`${realBasicUrl}feedbacks`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})


export const deleteFeedBack = createAsyncThunk('admin/deleteFeedBack',async({id})=>{
    try {
         const response = await axios.delete(`${realBasicUrl}feedbacks/${id}`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})


export const deleteSurvey = createAsyncThunk('admin/deleteSurvey',async({id})=>{
      console.log(id);
    try {
         const response = await axios.delete(`https://infinity-api-oqlt.onrender.com/deleteSurvey/${id}`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error)    
    }
})

export const getAllAnsweredSurvey = createAsyncThunk('admin/getAllAnsweredSurvey',async()=>{
    try {
         const response = await axios.get(`https://infinity-api-oqlt.onrender.com/getAllAnswer`)
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
      loading:false,
      isAdminLoggedIn:false,
      navTitle:'dashboard/adminHome',
      users:[],
      isAdmin:false
},
  reducers:{
    logOut:(state,action)=>{
       state.isAdminLoggedIn=false
       state.isAdmin=false
       localStorage.removeItem('admin')
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
      localStorage.setItem('admin',JSON.stringify({...action.payload}))
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


    [createNewSurvey.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [createNewSurvey.fulfilled]:(state,action)=>{
      state.survey=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
    },
    [createNewSurvey.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
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



    [getAllFeedBacks.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [getAllFeedBacks.fulfilled]:(state,action)=>{
      state.usersFeedBacks=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
    },
    [getAllFeedBacks.rejected]:(state,action)=>{
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

    [deleteFeedBack.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [deleteFeedBack.fulfilled]:(state,action)=>{
      return{
        ...state,usersFeedBacks:state.usersFeedBacks.filter(item=>item.id!==action.payload)
      }
    },
    [deleteFeedBack.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
    },


    [deleteSurvey.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [deleteSurvey.fulfilled]:(state,action)=>{
      return{
        ...state,generatedSurvey:state.generatedSurvey.filter(item=>item.id!==action.payload)
      }
    },
    [deleteSurvey.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
    },
  }

})

export const {logOut,setMode,setNavTitle}=adminSlice.actions
export const adminReducer=adminSlice.reducer