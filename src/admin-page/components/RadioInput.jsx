import { Box } from '@mui/material'
import React, { useState } from 'react'


const RadioInput = ({choiceType,setValue,inputValue,setData,index,setAnswerData,answerData}) => {
   let value=choiceType.split('/');
   let dynamicIndex=Math.random()*10;
   const [isButtonNotClicked,setIsButtonNotClicked]= useState(true)
   

   const handleInput=(e)=>{
      setData(index)
      setValue(e.target.value)
  }

  const handleButtonClicked=()=>{
     if(inputValue!==''){    
       if(choiceType==='userInput'){
          setAnswerData([...answerData,{'id':dynamicIndex,'answer':''}])
          setIsButtonNotClicked(false)
       }else setAnswerData([{'id':dynamicIndex,'answer':choiceType}])
       
      }else alert('first please fill the value')
  }

  const deleteAnswer=(id)=> setAnswerData(answerData.filter((item,index)=>item.id!==id))

 

  return (
    <Box sx={style.inputFieldContainer}>
     {choiceType==='userInput'? 
      <Box sx={{display:'flex',width:'100%',gap:'10px'}}>
      <input type='radio' disabled/>  
       <input 
          onChange={handleInput}
          style={{height:'35px',textIndent:'10px',width:'350px'}} 
          type={'text'} 
          placeholder='enter your answer here'/>
      <Box sx={{display:'flex',gap:'4px'}}>

      <button 
        style={style.btnStyle} 
        disabled={!isButtonNotClicked} 
        onClick={handleButtonClicked}>+</button>

       <button 
        style={style.btnStyle} 
        onClick={()=>deleteAnswer(index)}>-</button>
    
        </Box>
        </Box>:
        <Box sx={{display:'flex',gap:'20px',flexDirection:'column'}}>
        <label style={{display:'flex',gap:'10px'}}> 
         <input type='radio' disabled/> 
           {value[0]}
         </label>
        <label style={{display:'flex',gap:'10px'}}>  
          <input type='radio' disabled/> {value[1]}
        </label>
      </Box>
        }
     
    </Box>
  )
}

const style={
  inputFieldContainer:{
    width:'50%',
    display:'flex',
    gap:'10px',
    alignItems:'center'
  },
  btnStyle:{
    width:'30px',
    height:'30px',
    borderRadius:'100%',
    border:'none',
    backgroundColor:'#DFDFDF'
  },

}

export default RadioInput