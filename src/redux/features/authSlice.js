import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const signUp = createAsyncThunk('auth/signUp',async({userData,toast,navigate})=>{
    try {
    
         const response = await axios.post('https://infinity-api-oqlt.onrender.com/signUp',userData)
         if(response){
            toast.success('your account is successfully created')
            navigate('/')
            return response.data
         }
    } catch (error) {
        toast.error(error.response.data.error)    
    }
})


export const signIn = createAsyncThunk('auth/signIn',async({userData,toast,navigate})=>{
    try {
         const response = await axios.post('https://infinity-api-oqlt.onrender.com/signIn',userData)
         if(response){
            toast.success('well come back')
            navigate('/')
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



export const authSlice= createSlice({
    name:'auth',
    initialState:{
      users:[],
      loading:false,
      isLoggedIn:false,
      isLightMode:true,
      modeColor:'white',
      survey:[],
},
  reducers:{
    logOut:(state,action)=>{
       state.isLoggedIn=false
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
  }

})

  export const {logOut,setMode}=authSlice.actions

 export const authReducer=authSlice.reducer