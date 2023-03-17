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
    if(localStorage.getItem("user")){
        req.headers.authorization = `Bearer ${(JSON.parse(localStorage.getItem("user")).accessToken)}`
    }
  return req;
})



const testUrl='https://infinity-api-oqlt.onrender.com/loginAdmin'

const realBasicUrl='http://localhost:3000/'

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
            toast.success('Question Created')
            return response.data
         }
    } catch (error) {
       
        toast.error(error.response.data.error)    
    }
})




export const adminSlice= createSlice({
    name:'admin',
    initialState:{
      admins:[],
      survey:[],
      loading:false,
      isAdminLoggedIn:false,
      navTitle:'dashboard/adminHome',
      users:[]
},
  reducers:{
    logOut:(state,action)=>{
       state.isAdminLoggedIn=false
    },
     setMode:(state,action)=>{
       state.isLightMode=!state.isLightMode
    },
    setNavTitle:(state,action)=>{
        state.navTitle=action.payload
    }
  },
  extraReducers:{
    // [signUp.pending]:(state,action)=>{
    //   state.loading=true
    // },
    // [signUp.fulfilled]:(state,action)=>{
    //   state.users=action.payload
    //   state.loading=false
    //   state.isLoggedIn=true
    // },
    // [signUp.rejected]:(state,action)=>{
    //      state.loading=false
    // },

    [loginAdmin.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=false
    },
    [loginAdmin.fulfilled]:(state,action)=>{
      state.admins=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
      localStorage.setItem('user',JSON.stringify({...action.payload}))
    },
    [loginAdmin.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=false
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
  }

})

export const {logOut,setMode,setNavTitle}=adminSlice.actions
export const adminReducer=adminSlice.reducer