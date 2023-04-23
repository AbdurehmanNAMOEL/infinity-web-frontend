import { useEffect, useRef } from "react"

const UseKey=(key,cb)=>{

    const callbackRef=useRef(cb);
   
   useEffect(()=>{
        callbackRef.current=cb;
    },[cb])

  useEffect(()=>{
    const handleKeyPress=(e)=>{
        if(e.code===key)
        callbackRef.current(e)
     }
    document.addEventListener('keydown',handleKeyPress,true)
 
     return () => document.removeEventListener('keydown',handleKeyPress)
  },[key])
}

export default UseKey