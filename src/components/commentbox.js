import React, { useEffect } from 'react';
import commentbox from 'commentbox.io';



const ComBox = ()=>{
  useEffect(() =>{
    commentbox('5732401321869312-proj', {
      backgroundColor: null,  // default transparent
      textColor: "#222",  // default black
       subtextColor: "#222",  // default grey
   })
  },[])

  return(

  
  
  
  
  

  
  
  
  

    <div className="commentbox" />
  )

}
  
  export default ComBox