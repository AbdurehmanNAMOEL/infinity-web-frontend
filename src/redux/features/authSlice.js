import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const signUp = createAsyncThunk('auth/signUp',async({userData,toast,navigate})=>{
    try {
    
         const response = await axios.post('http://localhost:4000/signUp',userData)
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
         const response = await axios.post('http://localhost:4000/signIn',userData)
         if(response){
            toast.success('well come back')
            navigate('/')
            return response.data
         }
    } catch (error) {
       
        toast.error(error.response.data.error)    
    }
})


export const authSlice= createSlice({
    name:'auth',
    initialState:{
      users:[],
      loading:false,
      isLoggedIn:false
},
  reducers:{
    logOut:(state,action)=>{
       state.isLoggedIn=false
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
  }

})

  export const {logOut}=authSlice.actions

 export const authReducer=authSlice.reducer