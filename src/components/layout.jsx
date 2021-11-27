import React, { useState } from "react"
// import { SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
// import { Footer } from "./footer"
import { IoHandLeft } from "react-icons/io5"
import { FaRegPlusSquare } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Theme from "../components/theme"
import { Seo } from "./seo"
import '@fontsource/roboto'
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { FaHandPointDown } from "react-icons/fa"
import Bug from "../../static/assets/logo.svg"
import "../styles/reset.css"
import "../styles/variables.css"
import "../styles/global.css"

// import { FiShare } from 'react-icons/fi';
// import { FaRegPlusSquare } from 'react-icons/fa';
// import Fullscreen from "../components/FullScreen"
import Menu from "../components/menu"



import { useSiteMetadata } from "../hooks/use-site-metadata"
// import Audio from '../assets/audio.mp3'
// import TouchUp from '../components/TouchUp'
// import { IoMdFingerPrint } from 'react-icons/io'
import "../assets/scss/style.scss"
// import Consent from './Consent'

// 
// import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";



export function Layout({ children }) {
  const { iconimage } = useSiteMetadata()

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (

<>
      <Seo />


      <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div style={{overflow:''}}>
        {modal ? (
          <>
          <div style={{position:'fixed', top:'0', right:'0', padding:'10px', fontSize:'40px', background:'#111 !important', opacity:'1 !important', zIndex:'2',  filter:' drop-shadow(0px 4px 3px #000)',}}>
          <Link state={{noScroll: true }} to={closeTo}>
            <AiOutlineClose />
          </Link>
          </div>
          </>
        ) : (
""
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>



  
<header name="pagetop" className={isVisible ? 'left' : ''} >
{/* <header name="pagetop" className=""> */}

      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />

  <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle popped">


<Bug className="bug" style={{fontSize:'20px', width:'100%', opacity:'.4' }}/>
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 2px #000'}}>MENU</div>

  </label>


 <label aria-label="Background clicks close menu" id="menubgcloser" htmlFor="openSidebarMenu" className="backdrop1" ></label>

 <div id="sidebarMenu" className="" style={{minWidth:'', width:''}}>
  

  <ul className="sidebarMenuInner post-card left" style={{maxWidth:'250px', position:'absolute', right:'', display:'', justifyContent:''}}>

     <li className="carta" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>

<object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{ position:'fixed', zIndex:'-1', opacity:'.2', overflow:'hidden', border:'0px solid red', zIndex:'0', width:'100%', maxWidth:'', height:'auto', background:'transparent'  }} alt="VidSocks Logo Animated" title="animated content" >VidSocks Logo</object>
 </li>
 <li className="carto" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>
 <Link to="/">
<img src={iconimage} alt="VidSocks Logo" width="100%" height="100%" />
</Link>
 </li>



   <Menu />
   
</ul>
    </div>
</header>


<div style={{ display:'flex', alignSelf:'center', flexDirection:'',  width:'', position:'absolute', bottom:'0', zIndex:'5', width:'100%', justifyContent:'center'}}>
{/* <span style={{fontSize:'80%'}}>Site Preferences:</span> */}

  <div style={{ display:'flex', gap:'20px', justifyContent:'space-around', padding:'2px 12px', background:'rgba(0,0,0,0.30)', borderRadius:'12px 12px 0 0',}}>
    
  <button type="button" className="" onClick={toggleVisible} style={{wordWrap:'normal', color:'#fff'}}>
  <IoHandLeft style={{float:'left', marginRight:'8px', fontSize:'20px'}} />Left-handed?
</button>



<Theme  style={{display:'flex', alignSelf:'center', color:'#fff'}} />


  

    
    {/* <a href="https://vidsocks.com" target="_blank" rel="noreferrer">Web App by VidSocks</a> &nbsp; | &nbsp; <a href={speedIt} target="_blank" rel="noreferrer">Our Site Report Card</a> */}
    
    </div>

  </div>



{/* <button type="button" className="button" onClick={toggleVisible}>
  Left-handed?
</button> */}
        {children}

      
        
  </>
    
  )
}


