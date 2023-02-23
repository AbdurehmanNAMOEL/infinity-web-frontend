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


// export const signIn = createAsyncThunk('auth/signIn',async({userData,toast,navigate})=>{
//     try {
//          const response = await axios.post('https://infinity-api-oqlt.onrender.com/signIn',userData)
//          if(response){
//             toast.success('well come back')
//             navigate('/')
//             return response.data
//          }
//     } catch (error) {
       
//         toast.error(error.response.data.error)    
//     }
// })


export const adminSlice= createSlice({
    name:'admin',
    initialState:{
      admins:[],
      loading:false,
      isAdminLoggedIn:false,
      isLightMode:true,
      navTitle:'dashboard/adminHome'
},
  reducers:{
    logOut:(state,action)=>{
       state.isLoggedIn=false
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

    // [signIn.pending]:(state,action)=>{
    //   state.loading=true
    // },
    // [signIn.fulfilled]:(state,action)=>{
    //   state.users=action.payload
    //   state.loading=false
    //   state.isLoggedIn=true
    // },
    // [signIn.rejected]:(state,action)=>{
    //      state.loading=false
    // },
  }

})

export const {logOut,setMode,setNavTitle}=adminSlice.actions
export const adminReducer=adminSlice.reducer