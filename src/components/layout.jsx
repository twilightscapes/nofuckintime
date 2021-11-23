import React, { useState } from "react"
// import { SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
// import { Footer } from "./footer"
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

      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />



  <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle popped">


<Bug className="bug" style={{fontSize:'20px', width:'100%', opacity:'.4' }}/>
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 2px #000'}}>MENU</div>

  </label>


 <label aria-label="Background clicks close menu" id="menubgcloser" htmlFor="openSidebarMenu" className="backdrop1" ></label>


   <div id="sidebarMenu" className="" style={{minWidth:'', width:''}}>
  

    <ul className="sidebarMenuInner post-card left" style={{maxWidth:'250px', position:'absolute', right:'', display:'', justifyContent:''}}>

 <li className="carta" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>

<object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{ position:'fixed', zIndex:'-1', opacity:'.2', overflow:'hidden', border:'0px solid red', zIndex:'0', width:'100%', maxWidth:'', height:'auto', background:'transparent'  }} alt="animated content" title="animated content" >VidSocks Logo</object>
 </li>
 <li className="carto" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>
 <Link to="/">
<img src={iconimage} alt="AdFree YouTube" width="100%" height="100%" />
</Link>
 </li>
 

 <li className="carto no-app" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/contact/">
Contact
</Link>
</li>

 {/* <li className="carto no-app" style={{textAlign:''}}>
 <AnchorLink
    to="/#features"
    title="Check out our team!"
    className="stripped"
    stripHash
  >
- Amazing Features
</AnchorLink>
</li>


<li className="carto no-app" style={{textAlign:''}}>
 <AnchorLink className="navbar-item txtshadow" to="/#costs">
- Virtually No-Cost
</AnchorLink>
</li>

<li className="carto no-app" style={{textAlign:''}}>
 <AnchorLink className="navbar-item txtshadow" to="/#cms">
-Complete Control
</AnchorLink>
</li>


<li className="carto no-app" style={{textAlign:''}}>
 <AnchorLink className="navbar-item txtshadow" to="/#buy">
- Convinced? BUY IT!
</AnchorLink>
</li> */}


      <li className="carto" style={{textAlign:'center', paddingTop:'1rem'}}>
              <Link title="VidSocks Examples" className="navbar-item txtshadow neonText" to="/posts/">
                VIEW EXAMPLES
              </Link>
      </li>

 
      <li className="carta">
      <div style={{display:'flex', justifyContent:'center'}}>
<button className="back" onClick={()=>navigate(-1)} style={{padding:'4px 8px', borderRadius:'12px'}}>
        {" "} Continue Choosing 
</button>
</div>
      </li>

  
    </ul>

  </div>

    
</header>



{/* <button type="button" className="button" onClick={toggleVisible}>
  Left-handed?
</button> */}
        {children}

      
        
  </>
    
  )
}