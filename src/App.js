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
// import Blog from './admin-page/pages/Course';
import HomePage from './users-page/pages/HomePage';
import { Login } from './users-page/auth/page/Login';
import AboutUs from './users-page/pages/AboutUs';
import SignUp from './users-page/auth/page/SignUp';
import SurveyHome from './users-page/pages/survey/SurveyHome';
import ContactUs from './users-page/pages/UserFeedBack';
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
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './config/firebase_config';
import CourseRegistration from './admin-page/pages/Course';
import FeedBackPage from './admin-page/pages/FeedBackPage';
import QuestionList from './admin-page/pages/question/QuestionList';
import { QuestionAnswer } from '@mui/icons-material';
import QuestionAnswered from './admin-page/pages/question/QuestionAnswered';

function App() {
   const [isDrawerOpen,setDrawerOpen]=useState(true)
   const [phoneNumber,setPhoneNumber] = useState('')
   const [verify,setVerify] = useState('')
   const {isLightMode,loading}= useSelector(state=>state.auth)
   const [navText,setNavText]=useState('dashboard/adminHome')
   const [isScrolling,setIsScrolling]=useState(false)
   const [surveyData, setSurveyDetailData] = useState([])
   const [result,setResult]= useState()
    const closeDrawer=()=>{
          setDrawerOpen(prev=>!prev)
    }

    useEffect(()=>{
    },[isDrawerOpen])

    window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0){
         setIsScrolling(true)
         

        }else{
          setIsScrolling(false)
        }
      
  })


    const onCapTchaVerify=()=>{
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container', {
      'size': 'invisible',
        'callback': (response) => {
          onSignUp()
     },
     'expired-callback': () => {
  
  }
}, auth);
    }
  }

  const onSignUp=()=>{
    onCapTchaVerify()
   const appVerifier = window.recaptchaVerifier;
   const ph= '+251'+phoneNumber
    signInWithPhoneNumber(auth, ph, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
       console.log('successfully sent')
    }).catch((error) => {
       console.log(error)
    });

   
  }



  
  const handleConfirmation = async()=>{
    try {
       const response=await result.confirm(verify);
        console.log(response)  
    } catch (error) {
      console.log(error)
    }
    
  }


  

  return (
    <Box sx={
      {
        width:'100%',
        display:'flex',
        backgroundColor:`${isLightMode?'white':'#1E1E1E'}`
        }}>
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

        <Route path='question' 
           element={<QuestionnairePage  
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
        <Route path='course' 
          element={<CourseRegistration 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}/>}/>
        </Route>
      </Route>
        <Route  path='/login' element={<Login/>}/>
        <Route  
         path='/verify' 
         element={
         <VerificationPage verify={verify} setVerify={setVerify} handleConfirmation={handleConfirmation}/>}/>
         <Route  path='/rest' element={<RestPassword/>}/>
        <Route path='/forgetPassWord' 
          element={
          <ForgotPassword 
            phoneNumber={phoneNumber} 
            setPhoneNumber={setPhoneNumber} 
            onSignUp={onSignUp}/>
          }/>
        <Route  path='/signUp' element={<SignUp/>}/>
        <Route  path='/registration' element={<Registration/>}/>
        <Route isScrolling={isScrolling} path='/policy' element={<PrivacyPolicyHome/>}/>
        <Route isScrolling={isScrolling} path='/' element={<HomePage/>}/>
        <Route isScrolling={isScrolling} path='/aboutUs' element={<AboutUs/>}/>
        <Route isScrolling={isScrolling} path='/feedBack' element={<ContactUs/>}/>
        <Route element={<PrivateRoute/>}>
         <Route 
           isScrolling={isScrolling} 
           path='/survey'
           element={<SurveyHome  setSurveyDetailData={setSurveyDetailData} />}/>
         <Route 
            isScrolling={isScrolling} 
            path='/takeSurvey' 
            element={<SurveyDetail surveyData={surveyData}/>}/>
        </Route>
       </Routes>
      </Router>
     
    </Box>
  );
}

export default App;
