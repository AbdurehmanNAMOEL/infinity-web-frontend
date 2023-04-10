import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


axios.interceptors.request.use((req)=>{
    if(localStorage.getItem("admin")){
        req.headers.authorization = `Bearer ${(JSON.parse(localStorage.getItem("admin")).accessToken)}`
    }

  return req;
})


const realBasicUrl='http://localhost:3000/'


export const getAllSettingValue = createAsyncThunk('admin/getAllSettingValue',async()=>{
    try {
         const response = await axios.get(`${realBasicUrl}settings`)
         if(response){
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.message)    
    }
})


export const updateSetting = createAsyncThunk('admin/updateSetting',async({settingData,toast})=>{
    try {
         const response = await axios.post(`${realBasicUrl}settings`,settingData)
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
     
  }
})

export const {logOut,setMode,setNavTitle}=settingSlice.actions
export const settingReducer=settingSlice.reducer