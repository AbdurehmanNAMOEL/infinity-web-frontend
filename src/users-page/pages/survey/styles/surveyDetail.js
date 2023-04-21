import { handleResponsiveness } from "../../../auth/styles/loginStyle";

export const surveyDetailStyle={
  surveyDetailMainContainer:{
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  surveyDetailInnerContainer:{
    width:'100%',
    height:'auto',
    display:'flex',
    justifyContent:'center',
    marginTop:'80px'
  },
  questionDisplayMainContainer:{
   width:handleResponsiveness('100%','70%'),
    height:'500px',
    overflowY:'scroll',
    border:'solid 1px rgba(0,0,0,0.2)',
    borderRadius:'10px',
    marginTop:'30px'

  },
  questionDisplayContainer:{ 
    width:'100%',
    height:'auto',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
  
  },
  questionMainTitle:{
    color:'#1A6CE8',
    padding:'40px',
    marginTop:'20px',
    display:'flex',
    flexDirection:'column'
  },
  buttonContainer:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    marginBottom:'20px'}
}