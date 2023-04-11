import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


axios.interceptors.request.use((req)=>{
    if(localStorage.getItem("admin")){
        req.headers.authorization = `Bearer ${(JSON.parse(localStorage.getItem("admin")).accessToken)}`
    }

  return req;
})


const realBasicUrl='http://localhost:3000/'


export const getAllFeedBacks = createAsyncThunk('admin/getAllFeedBack',async()=>{
    try {
         const response = await axios.get(`${realBasicUrl}feedbacks`)
         if(response){  
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})


export const deleteFeedBack = createAsyncThunk('admin/deleteFeedBack',async({id})=>{
    try {
         const response = await axios.delete(`${realBasicUrl}feedbacks/${id}`)
         if(response){
            
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})

export const feedbackSlice= createSlice({
    name:'admin',
    initialState:{
      usersFeedBacks:[],
      isDrawerOpened:false,
      loading:false,
      navTitle:'dashboard/adminHome',
      modeColor:'white'
},
  reducers:{
    logOut:(state,action)=>{  
    },
     setMode:(state,action)=>{
       state.isLightMode=!state.isLightMode
    },
    setNavTitle:(state,action)=>{
        state.navTitle=action.payload
    },

  },
  extraReducers:{
   
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
  }
})

export const {logOut,setMode,setNavTitle}=feedbackSlice.actions
export const feedbackReducer=feedbackSlice.reducer