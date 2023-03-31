export const handleResponsiveness=(xs,md)=>{
  return {xs:xs,md:md}
}

export const loginStyle={
  loginMainWrapper:{
    width:'100%',
    height:handleResponsiveness('auto','100vh'),
    display:'flex',
    flexDirection:'column',      
  },
  loginMainContainer:{
    width:'100%',
    height:handleResponsiveness('auto','90%'),
    display:'flex',
    flexDirection:handleResponsiveness('column-reverse','row'),
    position:'relative',
    marginTop:'80px'
  },
  loginLeftContainer:{
    width:handleResponsiveness('100%','50%'),
    height:handleResponsiveness('70%','100%'),
    backgroundColor:'white',
    borderRadius:'0'
  },
  companyLogo:{
    width:'400px',
    height:'60px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'20px',
    cursor:'pinter',
  },

  loginCardContainer:{
    width:'100%',
    height:'85vh',
    display:'flex',
    justifyContent:'center',
  
    
    alignItems:'center'
  },
  loginCard:{
    width:'420px',
    height:'400px',
    boxShadow:'none'
  },
  loginTitleContainer:{
    width:'100%',
    height:'50px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  loginInputFieldContainer:{
    width:'100%',
    height:'50px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'30px'
  },
  loginButtonContainer:{
    width:'96%',
    height:'50px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'30px',
  },
  forgotPasswordContainer:{
    width:'77%',
    height:'30px',
    marginTop:'16px',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    marginLeft:'10%'
  },
  loginRightContainer:{
    width:handleResponsiveness('100%','50%'),
    height:handleResponsiveness('30%','100%'),
 
    borderRadius:'0',

  },
  companyName:{
      width:'100%',
      height:'80px',
      display:'flex',
      justifyContent:'flex-end',
      alignItems:'center',
  },
  createAccountLabelContainer:{
      width:'100%',
      height:'40px',
      display:'flex',
      justifyContent:'center',
      marginTop:'10px'
  }
}

export const basicFlexStyle={
  flexState:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
}
