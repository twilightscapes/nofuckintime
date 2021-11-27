import React from 'react'
import { Link } from 'gatsby-link'
// import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoHandLeft } from "react-icons/io5"
// import ScrollAnimation from 'react-animate-on-scroll'
// import CookieConsent from "react-cookie-consent"
// import styled from "styled-components";
// import { StaticImage } from "gatsby-plugin-image"

export default class Installer extends React.Component {

  state = {
     isActive:false
  }

  handleShow = ()=>{
      this.setState({
          isActive: true
      })
  }

  handleHide = () =>{
      this.setState({
          isActive: false
      })
  }

   render(){
       return(
           <>
           <div style={{textAlign:'center', marginTop:'1rem',}}>
           
             
             
             </div>

{this.state.isActive ? 
<>
  
  
  Sfwfkih sfskhsfk hskhf sfkshskfh f


</>
  : 
  <button type="button" className="" style={{wordWrap:'normal', color:'#fff'}}>
  <IoHandLeft style={{float:'left', marginRight:'8px', fontSize:'20px'}} />Left-handed?
</button> }
             
           </>
)
}
}