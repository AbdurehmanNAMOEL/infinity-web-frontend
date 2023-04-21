import { handleResponsiveness } from "../../auth/styles/loginStyle";

export const aboutUsStyle ={
  aboutMainContainer:{
    width:'100%',
    height:'auto',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  aboutUsContainer: {
    width:'100%',
    height:'50vh',
    marginTop:'110px',
    backgroundColor:'#1A6CE8',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  ourWorkContainer:{
   width:'100%',
   backgroundColor:'#F6F6F6',
   display:'flex',
   flexDirection:'column',
   

  },
  missionMainContainer:{
     width:handleResponsiveness('100%','45%'),
     height:handleResponsiveness('auto','70%'),
     display:'flex',
     justifyContent:'center',
     flexDirection:'column',
    alignItems:'center'

  },
  visionMainContainer:{
    width:handleResponsiveness('100%','50%'),
     height:handleResponsiveness('auto','70%'),
     display:'flex',
     justifyContent:'center',
     flexDirection:'column',
    alignItems:'center'
  },
  meetOurTeamMainContainer:{
    width:'100%',
    height:'60vh',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:'80px',
    marginBottom:'50px'
  
  },
  ourWorkCardContainer:{
    width:handleResponsiveness('auto','100%'),
    height:'80%',
    marginTop:'16px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:'50px',
    borderRadius:'100px 50px 150px 50px',
    marginLeft:'120px'
    
  },

  ourWorkCardContainerWrapper:{
    width:'100%',
    height:'80%',
    marginTop:'16px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:'50px',
    borderRadius:handleResponsiveness('none','100px 50px 150px 50px'),
    overflowX:handleResponsiveness('scroll','hidden'),
  },

  proverbContainer:{ 
    width:handleResponsiveness('100%','40%'),
    height:handleResponsiveness('auto','65%'),
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
  },
  divider:{
    width:'70%',
    marginLeft:'-130px',
    marginBottom:'16px',
    height:'10px',
    backgroundColor:'#1A6CE8'
  },
  infinityContainer:{ 
    width:handleResponsiveness('100%','50%'),
    height:handleResponsiveness('auto','65%'),
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
}
}