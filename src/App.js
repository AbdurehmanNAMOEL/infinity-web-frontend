import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import DashBoard from './admin-page/pages/DashBoard';
import Users from './admin-page/pages/Users';
import QuestionnairePage from './admin-page/pages/QuestionnairePage';
import ChartHomePage from './admin-page/pages/chart/chartHomepage/ChartHomePage';
import Blog from './admin-page/pages/Blog';
import HomePage from './users-page/pages/HomePage';
import { Login } from './users-page/auth/page/Login';
import AboutUs from './users-page/pages/AboutUs';
import SignUp from './users-page/auth/page/SignUp';
import SurveyHome from './users-page/pages/survey/SurveyHome';
import ContactUs from './users-page/pages/ContactUs';
import AdminHome from './admin-page/pages/AdminHome';
import PrivateRoute from './users-page/privateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
function App() {
   const [isDrawerOpen,setDrawerOpen]=useState(true)
   const {isLightMode}= useSelector(state=>state.auth)
   const [navText,setNavText]=useState('dashboard/adminHome')
    const closeDrawer=()=>{
          setDrawerOpen(prev=>!prev)
    }

    useEffect(()=>{
    },[isDrawerOpen])
  return (
    <Box sx={{width:'100%',display:'flex',backgroundColor:`${isLightMode?'white':'#1E1E1E'}`}}>
      <Router>
        <ToastContainer/>
       <Routes>
        <Route path='/dashBoard' 
          element={<DashBoard 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}/>}>
        <Route 
          path='' 
          element={<AdminHome  closeDrawer={closeDrawer}/>}/>
        <Route 
         path='users' 
         element={<Users 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}/>}/>

        <Route path='question' 
           element={<QuestionnairePage  
           isDrawerOpen={isDrawerOpen} 
           closeDrawer={closeDrawer}
           drawerWidth={isDrawerOpen?200:0}
          />}/>

         <Route path='Chart' element={<ChartHomePage 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}
         />}/>
        <Route path='adminBlog' element={<Blog 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route element={<PrivateRoute/>}>
         <Route path='/survey' element={<SurveyHome/>}/>
        </Route>
       </Routes>
      </Router>
     
    </Box>
  );
}

export default App;
