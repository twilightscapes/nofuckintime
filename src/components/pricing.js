import React from "react"
import { Link } from "gatsby"
// import { RiCheckboxCircleLine } from "react-icons/ri"

import { Seo } from "../components/seo"
// import { Layout } from "../components/layout"
// import { BiBorderRadius } from "react-icons/bi"
// import { Helmet } from "react-helmet"
const Thanks = () => (
  <>
    
    <Seo title="Pricing Options" />

{/* <div className="spacer33"></div>  */}




<div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', gap:'30px'}}>
  <div className="flexcheek" >
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px', textAlign:'center', color:''}}>
        <h2>VidSocks - Standard </h2>
          
        <ul className="featurelist" style={{listStyleType:'none'}}>
        <li>Includes 30 minutes of Customization
    
          <br />
          <br />
          <a href="https://secure3.myshopify.com/cart/41327956492448:1?channel=buy_button" target="_blank" rel="noreferrer" className="button">Standard ($499)</a>
        </li>
        <li className="fluff">Includes 1 hour of Video Resources</li>
        <li className="fluff">AdFree YouTube Tech - No ADs!</li>

</ul>
      </div>
    </div>
  </div>
  <div className="flexcheek">
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px',textAlign:'center', color:''}}>
        <h2>VidSocks - Pro</h2>

        <ul className="featurelist" style={{listStyleType:'none'}}>




        <li>Includes 2 hours of Customization
          <br />
          <span style={{color:'#37f011'}}>Recommended:</span>
          <br />
          <a href="https://secure3.myshopify.com/cart/41327989391520:1?channel=buy_button" target="_blank" rel="noreferrer" className="button fire">Pro ($899)</a>
        </li>
        <li className="fluff">Includes 1 hour of Video Resources</li>
        <li className="fluff">AdFree YouTube Tech - Advanced audio/video controls and No ADs.</li>
        <li className="fluff">AdFree YouTube Portal - watch all your fav videos with No ADs! Because clicking skip, Sucks!</li>



</ul>
      </div>
    </div>
  </div>

  <div className="flexcheek">
    <div className="frontcontent content-lr">
      <div className="content-inside" style={{padding:'8px',textAlign:'center', color:''}}>
        <h2>VidSocks - E-Com</h2>
        <ul className="featurelist" style={{listStyleType:'none', borderRadius:'52px'}}>
        

        <li>Includes 4 hour of Customization

          <br />
          <br />
          <a href="https://secure3.myshopify.com/cart/41328406036640:1?channel=buy_button" target="_blank" rel="noreferrer" className="button">E-Com ($1499)</a>
        </li>
        <li className="fluff">Includes 1 hour of Video Resources</li>
        <li className="fluff">Includes 1 hour of Advanced Resources</li>
        <li className="fluff">AdFree YouTube Tech - Advanced audio/video controls and No ADs.</li>
        <li className="fluff">AdFree YouTube Portal - watch all your fav videos with No ADs! Because clicking skip, Sucks!</li>
        <li className="fluff">Complete Shopify Integration (requires separate Shopify Account)</li>


</ul>
      </div>
    </div>
  </div>
  
</div>


<div className="learnmore" style={{display:'flex', justifyContent:'center', color:'#fff'}}><Link className="button" to="/about/">Learn more about VidSocks</Link></div>


      {/* <div className="content-inside fluff" style={{padding:'8px',textAlign:'center', color:'', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <h2 style={{fontSize:'1.8rem'}}>VidSocks - Customization</h2>
        <ul className="featurelist" style={{listStyleType:'none', maxWidth:'', display:'flex', justifyContent:'center'}}>
        

        <li>Small changes = 30 min | Medium change = 60 min
        
<br />
<br />
<div className="" style={{display:'flex', justifyContent:'center', color:'#fff'}}><Link className="button fire" to="/about/">30 Minutes ($50)</Link> <Link className="button" to="/about/">60 Minutes ($90)</Link></div>
<br />
For more complex updates and requests,<br /> <Link to="/contact">please contact me</Link>
          </li>
          </ul>
        

          </div> */}
   








    <div className="spacer33"></div> 
    {/* <div className="spacer66"></div>  */}
  </>
)

export default Thanks
