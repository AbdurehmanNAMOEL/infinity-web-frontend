import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import DashBoard from './admin-page/pages/DashBoard';
import Users from './admin-page/pages/Users';
import QuestionnairePage from './admin-page/pages/question/QuestionnairePage';
import ChartHomePage from './admin-page/pages/chart/chartHomepage/ChartHomePage';
import HomePage from './users-page/pages/HomePage';
import { Login } from './users-page/auth/page/Login';
import AboutUs from './users-page/pages/AboutUs';
import SignUp from './users-page/auth/page/SignUp';
import SurveyHome from './users-page/pages/survey/SurveyHome';
import AdminHome from './admin-page/pages/AdminHome';
import PrivateRoute from './users-page/privateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import PrivacyPolicyHome from './users-page/pages/policy/PrivacyPolicyHome';
import AdminLogin from './admin-page/pages/auth/pages/AdminLogin';
import AdminPrivateRoute from './admin-page/privateRoute/AdminPrivateRoute';
import Registration from './users-page/pages/Registration';
import SurveyDetail from './users-page/pages/survey/SurveyDetail';
import ScrollToTop from './shared/Components/ScrollToTop';
import LoadingPage from './shared/Components/LoadingPage';
import ForgotPassword from './users-page/auth/auth-rest/pages/ForgotPassword';
import VerificationPage from './users-page/auth/auth-rest/pages/VerificationPage';
import RestPassword from './users-page/auth/auth-rest/pages/RestPassword';
import FeedBackPage from './admin-page/pages/FeedBackPage';
import QuestionList from './admin-page/pages/question/QuestionList';
import QuestionAnswered from './admin-page/pages/question/QuestionAnswered';
import Appointment from './admin-page/pages/appointment/Appointment';
import ProfilePage from './users-page/user_info_pages/pages/profile/ProfilePage';
import UserProfileSubmissionPage from './users-page/auth/page/UserProfileSubmissionPage';
import ConsultantSechdulingPage from './admin-page/pages/appointment/ConsultantSechdulingPage';
import UserFeedBack from './users-page/pages/UserFeedBack';
import MyWallet from './users-page/user_info_pages/pages/wallet/MyWallet';
import Modal from './admin-page/components/Modal';
import Setting from './admin-page/pages/Setting';
function App() {
   const [isDrawerOpen,setDrawerOpen]=useState(true)
   const {isLightMode,loading}= useSelector(state=>state.auth)
   const [isScrolling,setIsScrolling]=useState(false)
   const [surveyData, setSurveyDetailData] = useState([])
   const closeDrawer=()=>setDrawerOpen(prev=>!prev)
    
   useEffect(()=>{
    },[isDrawerOpen])

    window.addEventListener('scroll',()=>{
     if(window.pageYOffset>0)setIsScrolling(true)
     else setIsScrolling(false)
   })


  return (
    <Box sx={
      {
        width:'100%',
        display:'flex',
        backgroundColor:`${isLightMode?'white':'#1E1E1E'}`
        }}>
             <div id='recaptcha-container'></div>
        {loading?<LoadingPage/>:''}
      <Router>
           <ScrollToTop/>
        <ToastContainer/>
      
       <Routes>
        <Route 
          path='adminLogin' 
          element={<AdminLogin/>}/>
        <Route element={<AdminPrivateRoute/>}>
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

        <Route path='question-Generator' 
           element={<QuestionnairePage  
           isDrawerOpen={isDrawerOpen} 
           closeDrawer={closeDrawer}
           drawerWidth={isDrawerOpen?200:0}
          />}/>
           <Route path='question-Generator/:id' 
           element={<QuestionnairePage  
           isDrawerOpen={isDrawerOpen} 
           closeDrawer={closeDrawer}
           drawerWidth={isDrawerOpen?200:0}
          />}/>
          <Route path='setting' 
           element={<Setting  
           isDrawerOpen={isDrawerOpen} 
           closeDrawer={closeDrawer}
           drawerWidth={isDrawerOpen?200:0}
          />}/>
        <Route path='questionList' 
           element={<QuestionList  
           isDrawerOpen={isDrawerOpen} 
           closeDrawer={closeDrawer}
           drawerWidth={isDrawerOpen?200:0}
          />}/>

        <Route path='answered' 
           element={<QuestionAnswered  
           isDrawerOpen={isDrawerOpen} 
           closeDrawer={closeDrawer}
           drawerWidth={isDrawerOpen?200:0}
          />}/>

        <Route path='feedback' 
           element={<FeedBackPage  
           isDrawerOpen={isDrawerOpen} 
           closeDrawer={closeDrawer}
           drawerWidth={isDrawerOpen?200:0}
          />}/>

         <Route path='Chart' element={<ChartHomePage 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}
         />}/>
        <Route path='appointment' 
          element={<Appointment 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}/>}/>
         
         <Route path='appointment' 
           element={<Appointment  
           isDrawerOpen={isDrawerOpen} 
           closeDrawer={closeDrawer}
           drawerWidth={isDrawerOpen?200:0}
          />}/>

          <Route path='consultant' 
           element={<ConsultantSechdulingPage  
           isDrawerOpen={isDrawerOpen} 
           closeDrawer={closeDrawer}
           drawerWidth={isDrawerOpen?200:0}
          />}/>

        </Route>
      </Route>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/verify' element={<VerificationPage/>}/>
         <Route  path='/rest' element={<RestPassword/>}/>
        <Route path='/forgetPassWord' 
          element={
          <ForgotPassword />
          }/>
        <Route  path='/signUp' element={<SignUp/>}/>
        <Route  path='/userProfileFiller' element={<UserProfileSubmissionPage/>}/>
        <Route isScrolling={isScrolling} path='/policy' element={<PrivacyPolicyHome/>}/>
        <Route isScrolling={isScrolling} path='/' element={<HomePage/>}/>
        <Route isScrolling={isScrolling} path='/aboutUs' element={<AboutUs/>}/>
       
      <Route element={<PrivateRoute/>}>
        
        <Route 
          isScrolling={isScrolling} 
          path='/feedBack' 
          element={<UserFeedBack/>}
        />

        <Route  
          path='/registration' 
          element={<Registration/>}
        />

        <Route  
          path='/myWallet' 
          element={<MyWallet/>}
        />

         <Route 
           isScrolling={isScrolling} 
           path='/survey'
           element={<SurveyHome  setSurveyDetailData={setSurveyDetailData} />}/>
         <Route 
            isScrolling={isScrolling} 
            path='/takeSurvey' 
            element={<SurveyDetail surveyData={surveyData}/>}/>
          <Route 
            isScrolling={isScrolling} 
            path='/profile' 
            element={<ProfilePage/>}/>
        </Route>
       </Routes>
      </Router>
     
    </Box>
  );
}

export default App;
