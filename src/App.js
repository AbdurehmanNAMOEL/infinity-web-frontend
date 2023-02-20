import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from './admin-page/components/Header';
import SideBar from './admin-page/components/SideBar';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import DashBoard from './admin-page/pages/DashBoard';
import Users from './admin-page/pages/Users';
import QuestionnairePage from './admin-page/pages/QuestionnairePage';
import ChartHomePage from './admin-page/pages/chart/chartHomepage/ChartHomePage';
import Blog from './admin-page/pages/Blog';
import HomePage from './users-page/pages/HomePage';
import { Login } from './users-page/auth/page/Login';
import NavBar from './users-page/components/NavBar';
import AboutUs from './users-page/pages/AboutUs';
import SignUp from './users-page/auth/page/SignUp';
import BlogsHome from './users-page/pages/blog/BlogsHome';
import SurveyHome from './users-page/pages/survey/SurveyHome';
import ContactUs from './users-page/pages/ContactUs';
import AdminHome from './admin-page/pages/AdminHome';
function App() {
   const [isDrawerOpen,setDrawerOpen]=useState(true)
    const closeDrawer=()=>{
          setDrawerOpen(prev=>!prev)
    }

    useEffect(()=>{
    },[isDrawerOpen])
  return (
    <Box sx={{width:'100%',display:'flex'}}>
      <Router>
       <Routes>
        <Route path='/dashBoard' 
          element={<DashBoard 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}/>}>
        <Route path='adminHome' element={<AdminHome  closeDrawer={closeDrawer}/>}/>
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
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/blog' element={<BlogsHome/>}/>
        <Route path='/survey' element={<SurveyHome/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
       </Routes>
      </Router>
     
    </Box>
  );
}

export default App;
