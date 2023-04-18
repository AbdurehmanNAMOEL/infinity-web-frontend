import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'



axios.interceptors.request.use((req)=>{
    if(sessionStorage.getItem("admin")){
        req.headers.authorization = `Bearer ${(JSON.parse(sessionStorage.getItem("admin")).accessToken)}`
    }

  return req;
})


const realBasicUrl='http://localhost:3000/'


export const createNewSurvey = createAsyncThunk('admin/createSurvey',async({surveyData,toast})=>{
    try {
         const response = await axios.post(`${realBasicUrl}/survey/submitSurvey`,surveyData)
         if(response){
            toast.success('Survey Created successfully')
            return response.data
         }
    } catch (error) {
       
        toast.error(error.response.data.error.message)    
    }
})

export const deleteSurvey = createAsyncThunk('admin/deleteSurvey',async({id,toast})=>{
    
    try {
         const response = await axios.delete(`${realBasicUrl}surveys/${id}`)
         if(response){
            toast.success('Successfully deleted')
            return response.data
         }
    } catch (error) {
        toast.error(error.response.data.error.message)    
    }
})

export const editSurvey = createAsyncThunk('admin/editSurvey',async({surveyData,newIdValue,toast})=>{
  console.log(surveyData);  
    try {
         const response = await axios.patch(`${realBasicUrl}survey/${newIdValue}/updateSurvey`,surveyData)
         if(response){
            toast.success('Successfully edited')
            return response.data
         }
    } catch (error) {
       
        console.log(error.response.data.error.message)    
    }
})


export const questionSlice= createSlice({
    name:'admin',
    initialState:{
      generatedSurvey:[], 
      answeredSurvey:[],
      editableSurveyValue:[],   
      isDrawerOpened:false,
      loading:false,
      isAdminLoggedIn:false,
      navTitle:'dashboard/adminHome',
      isAdmin:false,
      modeColor:'white'
},
  reducers:{
    logOut:(state,action)=>{
      state.isAdminLoggedIn=false
      state.isAdmin=false
      localStorage.removeItem('admin')
      state.survey=[]
      state.generatedSurvey=[] 
      state.answeredSurvey=[]   
      state.loading=false
      state.isAdminLoggedIn=false
    },
     setMode:(state,action)=>{
       state.isLightMode=!state.isLightMode
    },
    setNavTitle:(state,action)=>{
        state.navTitle=action.payload
    },

    setEditableSurveyValue:(state,action)=>{
        state.editableSurveyValue=action.payload
    },

  },
  extraReducers:{
  
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

    [deleteSurvey.pending]:(state,action)=>{
      state.loading=true
      state.isAdminLoggedIn=true
    },
    [deleteSurvey.fulfilled]:(state,action)=>{
      return{
        ...state,generatedSurvey:state.generatedSurvey.filter(item=>item.id!==action.payload)
      }
    },
   
  }

})

export const {logOut,setEditableSurveyValue,setMode,setNavTitle}=questionSlice.actions
export const questionReducer=questionSlice.reducer