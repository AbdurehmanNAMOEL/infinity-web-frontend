import {handleResponsiveness} from "../../auth/styles/loginStyle";

export const userFeedBackStyle ={
    contactContainer:{
      width:'100%',
      height:'auto',
      display:'flex',
      flexDirection:handleResponsiveness('column','row'),
      gap:handleResponsiveness('0','5%'),
      overflowX:'hidden'
    },
    contactLeftContainer:{
      width:handleResponsiveness('100%','70%'),
      height:handleResponsiveness('80%','640px'),
      display:'flex',
      flexDirection:'column', 
    },
    contactRightContainer:{
      width:handleResponsiveness('100%','30%'),
      height:handleResponsiveness('50%','640px'),
      backgroundColor:'#0971f1',
      display:'flex',
      flexDirection:'column'
    },
    logoContainer:{
        width:'100%',
        height:'70px',
        backgroundColor:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'40px',
        marginLeft:'20px'
    },
    contactFormContainer:{
        width:'100%',
        height:'580px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    formContainer:{
        width:handleResponsiveness('95%','80%'),
        height:handleResponsiveness('400px','500px'),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:handleResponsiveness('40px','50px'),
        boxShadow:'none',
    },
    infoContainer:{
        width:handleResponsiveness('100%','400px'),
        height:handleResponsiveness('500px','400px'),
        backgroundColor:'#333',
        marginLeft:handleResponsiveness('0','-100px'),
        marginTop:handleResponsiveness('0','40px'),
        display:'flex',
        flexDirection:'column'
    },
    infoDirectContactContainer:{
      width:handleResponsiveness('30%','400px'),
      height:handleResponsiveness('30%','100px'),
      display:'flex',
      flexDirection:'column',
      marginLeft:'40px',
      marginTop:handleResponsiveness('10px','40px'),
      gap:'10px'

    },
    infoSocialMediaContactContainer:{
        width:handleResponsiveness('70%','400px'),
        height:handleResponsiveness('50%','400px'),
        display:'flex',
        flexDirection:'column',
        marginLeft:'40px',
        marginTop:handleResponsiveness('10px','40px'),
        gap:'10px',
        overFlowX:'scroll'  
    },
    homeBtn:{
      display:handleResponsiveness('block','none'),
      marginRight:'20px'
    },
    feedBackGroupContainer:{
      width:'80%'
    }
}