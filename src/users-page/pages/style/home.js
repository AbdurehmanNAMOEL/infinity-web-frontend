import { useSelector } from "react-redux";
import { handleResponsiveness } from "../../auth/styles/loginStyle";


export const homePageStyle={
  homeLandingPage:{
    width:'100%',
    height:'90vh',
    display:'flex',
    flexDirection:handleResponsiveness('column','row'),
    marginTop:'70px',
  },
  homeLeftLadingPageContainer:{
    width:handleResponsiveness('100%','50%'),
    height:handleResponsiveness('60%','100%'),
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
   homeRightLadingPageContainer:{
    width:handleResponsiveness('100%','50%'),
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  howSurveyWorkIconContainer:{
    width:handleResponsiveness('80%','20%'),
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'20px',
    marginBottom:handleResponsiveness('20px','0px')
  },
  howSurveyWorkIconInnerContainer:{
    width:handleResponsiveness('80px','120px'),
    height:handleResponsiveness('80px','120px'),
    backgroundColor:'#1A6CE8',
    borderRadius:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  howSurveyWorkContainer:{
    width:'95%',
    height:handleResponsiveness('auto','50%'),
    display:'flex',
    flexDirection:handleResponsiveness('column','row'),
    justifyContent:'center',
    alignItems:'center',
  },
  icons:{
    width:'60%',
    height:'60%',
  },
  sectionMainTitle:{
    textAlign:'center',
    fontFamily:'Inter',
    marginTop:handleResponsiveness('0px','20px'),
    fontWeight:'bold',
    marginBottom:handleResponsiveness('80px','0px'),
    fontSize:handleResponsiveness('24px','42px')         
  },
  homeLandingPageImageContainer:{
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    boxShadow:'none'
  },
 howSurveyWorkMainContainer:{
    width:'100%',
    height:handleResponsiveness('auto','400px'),
    backgroundColor:'#F6F6F6',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'50px',
    marginBottom:'50px'
  },
  whyShouldMainContainer: {
    width:'100%',
    height:handleResponsiveness('auto','400px'),
    backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  whyShouldInnerContainer:{
    width:'95%',
    height:handleResponsiveness('auto','80%'),
    display:'flex',
    flexDirection:handleResponsiveness('column','row'),
    justifyContent:'center',
    alignItems:'center',
    gap:'40px'
  },
  registrationContainer:{
    width:'100%',
    height:handleResponsiveness('auto','450px'),
    backgroundColor:'white',
    display:'flex',
    flexDirection:handleResponsiveness('column','row'),
    justifyContent:'center',
    alignItems:'center',
    gap:'20px',
    marginBottom:'5px',
    marginTop:'50px'
  },
  registrationInnerContainers:{
    width:handleResponsiveness('100%','50%'),
    height:handleResponsiveness('200px','100%'),
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  surveyTimeMainContainer:{
    width:'100%',
    height:handleResponsiveness('auto','350px'),
    // backgroundColor:'#F6F6F6',
    marginBottom:handleResponsiveness('150px','0'),
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
   marginTop:handleResponsiveness('200px','0px')
  },
  topCircleContainer:{
    display:handleResponsiveness('none','flex'),
    zIndex:500,
    width:'50%',
    justifyContent:'flex-start',
    marginTop:'-10px',
    height:'100px'
  },
  topCircle:{
    width:'120px',
    position:'absolute',
    height:'120px',
    backgroundColor:'#80B2FF',
    borderRadius:'100%'
  },
  surveyContainer:{
    width:'90%',
    height:handleResponsiveness('50vh','50%'),
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    position:'absolute',
    borderRadius:'10px',
  },
  surveyContentContainer:{
    width:handleResponsiveness('90%','30%'),
    flexDirection:'column',
    height:handleResponsiveness('10%','50%'),
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  bottomCircleContainer:{
    display:handleResponsiveness('none','flex'),
    marginTop:'250px',
    width:'50%',
    height:'100px',
    justifyContent:'flex-end'
  },
  bottomCircle:{
    zIndex:500,
    width:'120px',
    marginTop:'-50px',
    position:'absolute',
    height:'120px',
    backgroundColor:'#6B6F75',
    borderRadius:'100%'
  }
}