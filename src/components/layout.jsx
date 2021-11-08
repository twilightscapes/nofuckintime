import * as React from "react"
import { SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"
import '@fontsource/roboto'
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
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





  return (
    <div style={{background:''}}> 
<>
      <Seo />
      <SkipNavLink />

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
<></>
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>


      {/* <Header /> */}

      
      
      {/* <audio controls="controls" autoplay="false" src={Audio}>
    Your browser does not support the HTML5 Audio element.
</audio> */}

{/* <Fullscreen /> */}

<header name="pagetop" >

{/* <Link to="/"><img id="logo" className="twlogo1" src={twLogo} alt="Twilightscapes Logo" style={{margin:'16px 0 40px 4vw', minWidth:'100px', maxWidth:'100px', height:'auto', padding:'0', border:'0px solid red', position:'fixed', zIndex:'2'}} /></Link> */}







      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle popped">

  {/* <div className="cornertext" style={{textShadow:'2px', color:'#fff',}}>
  <IoMdFingerPrint style={{fontSize:'50px', }}/>
 <span><br />TAP CORNER<br /> FOR MENU<br />
</span>
    </div> */}

<Bug className="bug" style={{fontSize:'20px', maxWidth:'100%', opacity:'.3' }}/>
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 2px #000'}}>MENU</div>
{/* <span>MENU</span>
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div> */}
  </label>


 <label aria-label="Background clicks close menu" id="menubgcloser" htmlFor="openSidebarMenu" className="backdrop1" ></label>


   <div id="sidebarMenu" style={{minWidth:'', width:''}}>
  
{/* <div className="no-app promocode">
30% OFF CODE: <span style={{color:'var(--primary-color)', fontWeight:'bold'}}>LoveTheNight</span>
</div> */}










  {/* <Install /> */}



	

    




    <ul className="sidebarMenuInner post-card" style={{maxWidth:'250px', position:'absolute', right:'0', display:'', justifyContent:''}}>

 <li className="carta" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>
 <Link to="/"> 
<img src={iconimage} alt="VidSock Logo" width="100%" height="100%" />
<span>NFT Marketing Platform</span>
</Link>
 </li>
 <li className="carto" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>
 <Link to="/"> 
<img src={iconimage} alt="AdFree YouTube" width="100%" height="100%" />
<span>NFT Marketing Platform</span>
</Link>
 </li>
 

 <li className="carto" style={{textAlign:''}}>
 <Link className="navbar-item txtshadow" to="/contact/">
Contact Us<span>- we love feedback!</span>
</Link>
</li>
    <li className="carto">
              <Link className="navbar-item txtshadow" to="/about/">
                About VidSocks <span>- all about the platform</span>
              </Link>
      </li>


 {/* <li className="carta" style={{border:'none', marginBottom:'1rem'}}>
 <a className="" onClick={()=>navigate(-1)}><img id="logo" className="twlogo" src={twLogo} alt="Twilightscapes Logo" title="Return To Homepage" style={{minWidth:'100px', maxWidth:'',}} /></a>
 </li> */}







{/* </li>
<li className="carta">
 <Link className="navbar-item txtshadow" to="/contact/">
Contact Me<span>Ordering Questions?</span>
</Link> </li>*/}





      {/* <li className="carto">
      <Link className="navbar-item txtshadow" to="/photo-tools/">Twilight Tools<span>Lighting and Gear</span></Link>
       </li> */}


  

      {/* <li className="carto">
      <Link className="navbar-item txtshadow" to="/articles/">Articles<span>My rants &amp; raves</span></Link>
       </li> */}

{/* 
      <li className="carto">
              <Link className="navbar-item txtshadow" to="/nft/">
                NFT Collectibles <span>Limited Editions</span>
              </Link>
      </li> */}


      {/* <li className="carto">
              <Link className="navbar-item txtshadow" to="/vault/favorites/">
              The Vault <span>Full Photo archives</span>
              </Link>
      </li> */}


{/* <li className="carto">
              <Link className="navbar-item txtshadow" to="/experiences/">
                Experiences
                <span>Photo Multimedia</span>
              </Link>
      </li> */}



      {/* <li className="carto">
              <Link className="navbar-item txtshadow" to="/photos/">
      
              View My Photos <span style={{color:'var(--primary-color)',}}>Buy  one to say thanks!</span>
              </Link>
      </li>  */}

{/* <li className="carto">
              <Link className="navbar-item txtshadow" to="/archive/">
                The Archive
                <span>World's First 3D Blog</span>
              </Link>
      </li> */}
      

    
      <li className="carta">
      <div style={{display:'flex', justifyContent:'center'}}>
<button className="back" onClick={()=>navigate(-1)} style={{padding:'4px 8px', borderRadius:'12px'}}>
        {/* <span className="icon -left" style={{paddingRight:'1rem'}}>
                <BiLeftArrow />
        </span>  */}
        {" "} Continue Choosing 
</button>
</div>
      </li>

      

      <li className="carto crypto" style={{border:'none', display:'flex', justifyContent:'space-between', verticalAlign:'center', padding:'0 20px',  }}>
  
      {/* <Theme  style={{padding:'0'}} /> */}
   {/* <Link className="sherlock" to="/search" style={{marginRight:'0', marginTop:'5px'}}>
    <span className="carto"><SearchIcon /></span>
   </Link> */}
   
  {/* <div className="carto"><CartButton quantity={quantity} /></div> */}


        </li>

    

    </ul>






  </div>










      {/* <Toast show={loading || didJustAddToCart} >
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <div style={{fontSize:'30px', marginLeft:'10px'}}><ImArrowRight /></div>
          </>
        )}
      </Toast> */}
 



      {/* <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>
  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div> */}
     


     

</header>



{/* <div className="toppad" style={{display:'block', height:'20px', border:'0px solid yellow'}}></div> */}



      {/* <SkipNavContent className="intro"> */}
        {children}
      {/* </SkipNavContent> */}
      
      


      <Footer />
      
      </>
    </div>
    
  )
}