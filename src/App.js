import { Box } from '@mui/material';
import { Suspense, lazy, useEffect, useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import PrivateRoute from './users-page/privateRoute/PrivateRoute';
import AdminPrivateRoute from './admin-page/privateRoute/AdminPrivateRoute';
import { useSelector } from 'react-redux';
import ScrollToTop from './shared/Components/ScrollToTop';
import LoadingPage from './shared/Components/LoadingPage';




const HomePage =lazy (()=>import('./users-page/pages/HomePage'))
const  DashBoard =lazy (()=>import('./admin-page/pages/DashBoard'))
const Users =lazy (()=>import('./admin-page/pages/Users'))
const QuestionnairePage =lazy (()=>import('./admin-page/pages/question/QuestionnairePage'))
const ChartHomePage =lazy (()=>import('./admin-page/pages/chart/chartHomepage/ChartHomePage'))
const  Login =lazy (()=>import('./users-page/auth/page/Login'))
const AboutUs =lazy (()=>import('./users-page/pages/AboutUs'))
const  SignUp =lazy (()=>import( './users-page/auth/page/SignUp'))
const SurveyHome =lazy (()=>import('./users-page/pages/survey/SurveyHome'))
const  AdminHome =lazy (()=>import('./admin-page/pages/AdminHome'))
const PrivacyPolicyHome =lazy (()=>import('./users-page/pages/policy/PrivacyPolicyHome'))
const AdminLogin =lazy (()=>import('./admin-page/pages/auth/pages/AdminLogin'))
const  SurveyDetail =lazy (()=>import('./users-page/pages/survey/SurveyDetail'))
const RestPassword =lazy (()=>import('./users-page/auth/auth-rest/pages/RestPassword'))
const  FeedBackPage =lazy (()=>import('./admin-page/pages/FeedBackPage'))
const  QuestionList =lazy (()=>import('./admin-page/pages/question/QuestionList'))
const QuestionAnswered =lazy (()=>import('./admin-page/pages/question/QuestionAnswered'))
const ProfilePage =lazy (()=>import('./users-page/user_info_pages/pages/profile/ProfilePage'))
const UserProfileSubmissionPage =lazy (()=>import('./users-page/auth/page/UserProfileSubmissionPage'))
const ConsultantSechdulingPage =lazy (()=>import('./admin-page/pages/appointment/ConsultantSechdulingPage'))
const UserFeedBack =lazy (()=>import('./users-page/pages/UserFeedBack'))
const MyWallet =lazy (()=>import('./users-page/user_info_pages/pages/wallet/MyWallet'))
const  Modal =lazy (()=>import('./admin-page/components/Modal'))
const  Setting =lazy (()=>import('./admin-page/pages/Setting'))
const PhoneNumberVerifierPage =lazy (()=>import('./users-page/auth/auth-rest/pages/PhoneNumberVerifierPage'))
const OtpVerifierPage =lazy (()=>import('./users-page/auth/auth-rest/pages/OtpVerifierPage'))
const UserAppointment =lazy (()=>import('./users-page/pages/Appointment/UserAppointment'))
const PageIsNotFound =lazy (()=>import('./users-page/pages/PageIsNotFound'))
const  Appointment =lazy (()=>import( './admin-page/pages/appointment/Appointment'))
const  Registration =lazy (()=>import('./users-page/pages/Appointment/Registration'))
const MySurveyList =lazy (()=>import('./users-page/user_info_pages/pages/mySurveyList/MySurveyList'))




function App() {
   const [isDrawerOpen,setDrawerOpen]=useState(true)
   const {isLightMode,modeColor,loading}= useSelector(state=>state.auth)
   const [isScrolling,setIsScrolling]=useState(false)
   const [surveyData, setSurveyDetailData] = useState([])
   const closeDrawer=()=>setDrawerOpen(prev=>!prev)
   const [navigateTo,setNavigateTo]=useState('rest') 
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
        backgroundColor:modeColor
        }}>
             <div id='recaptcha-container'></div>
        {loading?<LoadingPage/>:''}
      <Router>
           <ScrollToTop/>
        <ToastContainer/>
      <Suspense fallback={<LoadingPage/>}>
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
         
      
          <Route path='consultant' 
           element={<ConsultantSechdulingPage  
           isDrawerOpen={isDrawerOpen} 
           closeDrawer={closeDrawer}
           drawerWidth={isDrawerOpen?200:0}
          />}/>

        </Route>
      </Route>

        <Route  path='/login' element={<Login/>}/>
        <Route  path='/verify' element={<OtpVerifierPage navigateTo={navigateTo}/>}/>
         <Route  path='/rest/:id' element={<RestPassword/>}/>
        
        <Route  path='/signUp' element={<SignUp/>}/>
        <Route  
          path='/verifyPhoneNumber' 
          element={<PhoneNumberVerifierPage setNavigateTo={setNavigateTo}/>}
        />
        <Route isScrolling={isScrolling} path='/policy' element={<PrivacyPolicyHome/>}/>
        <Route isScrolling={isScrolling} path='/' element={<HomePage/>}/>
        <Route isScrolling={isScrolling} path='/aboutUs' element={<AboutUs/>}/>
        
      <Route element={<PrivateRoute/>}>
        <Route isScrolling={isScrolling} path='/survey'
           element={<SurveyHome  setSurveyDetailData={setSurveyDetailData} />}/>
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
          path='/userAppointment' 
          element={<UserAppointment/>}
        />

        <Route  
          path='/myWallet' 
          element={<MyWallet/>}
        />
        <Route  
          path='/mySurveyList' 
          element={<MySurveyList/>}
        />
         <Route 
            isScrolling={isScrolling} 
            path='/takeSurvey' 
            element={<SurveyDetail surveyData={surveyData}/>}/>
          <Route 
            isScrolling={isScrolling} 
            path='/profile' 
            element={<ProfilePage/>}/>
             <Route  
               path='/userProfileFiller' 
               element={<UserProfileSubmissionPage/>}
               />
        </Route>
           <Route  
             path='/*' 
             element={<PageIsNotFound/>}
           />
       </Routes>
       </Suspense>
      </Router>
     
    </Box>
  );
}

export default App;
