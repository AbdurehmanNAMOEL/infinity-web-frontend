import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../../api/axios';

axios.interceptors.request.use((req)=>{
    if(sessionStorage.getItem("admin")){
        req.headers.authorization = `Bearer ${(JSON.parse(sessionStorage.getItem("admin")).accessToken)}`
    }

  return req;
})


export const getAllSettingValue = createAsyncThunk('admin/getAllSettingValue',async()=>{
    try {
         const response = await axios.get(`settings`)
         if(response){
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})


export const updateSetting = createAsyncThunk('admin/updateSetting',async({settingData,toast})=>{
    try {
         const response = await axios.patch(`settings`,settingData)
         if(response){
            toast.success('successfully updated')
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})

export const settingSlice= createSlice({
    name:'admin',
    initialState:{
      settingData:{},
      isDrawerOpened:false,
      loading:false,
      rewardAndCheckOutValue:{},
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
   
    [getAllSettingValue.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [getAllSettingValue.fulfilled]:(state,action)=>{
      state.settingData=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
    },
    [getAllSettingValue.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
    },

    [updateSetting.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [updateSetting.fulfilled]:(state,action)=>{
      state.rewardAndCheckOutValue=action.payload
      state.loading=false
      state.isAdminLoggedIn=true
    },
    [updateSetting.rejected]:(state,action)=>{
      state.loading=false
      state.isAdminLoggedIn=true
    },
     
  }
})

export const {logOut,setMode,setNavTitle}=settingSlice.actions
export const settingReducer=settingSlice.reducer