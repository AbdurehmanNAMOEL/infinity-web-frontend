import { handleResponsiveness } from "../../../auth/styles/loginStyle";

export const surveyHomePageStyle = {
  landingPage: {
    width: '100%',
    height: '80vh',
    backgroundColor: '#DFDFDF',
    display:'flex',
    marginTop:'80px',
    flexDirection:handleResponsiveness('column','row')
 },
 surveyHomePageLandingPageContainer:{
    width:handleResponsiveness('100%','50%'),
    height:handleResponsiveness('30%','80%'),
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  surveyHomeLandingPageImageContainer:{
    width:handleResponsiveness('100%','50%'),
    height:handleResponsiveness('70%','80%'),
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  surveyCardContainer:{
    marginTop:'20px',
    width:handleResponsiveness('90%','80%'),
    marginLeft:'10%',
    marginBottom:'20px',
    display:'flex',
    placeItems:'center'
}
  
}