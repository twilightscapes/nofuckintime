import React from "react"
import { Link } from "gatsby"
import { RiCheckboxCircleLine } from "react-icons/ri"

import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import { BiBorderRadius } from "react-icons/bi"

const Thanks = () => (
  <Layout>
    <Seo title="Thank you" />

<div className="spacer33"></div> 




<div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', gap:'30px'}}>
  <div className="flexcheek" >
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px', textAlign:'center', color:'#fff'}}>
        <h2>VidSocks - Standard </h2>
          
        <ul className="featurelist" style={{listStyleType:'none'}}>
        <li>Includes 1 hour of Customization
          <br />
          Includes 1 hour of Video Resources
          <br />
          <br />
          <br />
          <a href="https://secure3.myshopify.com/cart/41327956492448:1?channel=buy_button" target="_blank" rel="noreferrer" className="button">Standard ($499)</a>
        </li>



</ul>
      </div>
    </div>
  </div>
  <div className="flexcheek">
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px',textAlign:'center', color:'#fff'}}>
        <h2>VidSock - Pro</h2>

        <ul className="featurelist" style={{listStyleType:'none'}}>




        <li>Includes 3 hour of Customization
          <br />
          Includes 1 hour of Video Resources
          <br />
          <br />
          <br />
          <a href="https://secure3.myshopify.com/cart/41327989391520:1?channel=buy_button" target="_blank" rel="noreferrer" className="button">Pro ($899)</a>
        </li>



</ul>
      </div>
    </div>
  </div>

  <div className="flexcheek">
    <div className="frontcontent content-lr">
      <div className="content-inside" style={{padding:'8px',textAlign:'center', color:'#fff'}}>
        <h2>VidSock - E-Com</h2>
        <ul className="featurelist" style={{listStyleType:'none', borderRadius:'52px'}}>
        

        <li>Includes 5 hour of Customization
          <br />
          Includes 2 hour of Video Resources
          <br />
          Complete Shopify Integration
          <br />
          <br />
          <a href="https://secure3.myshopify.com/cart/41328406036640:1?channel=buy_button" target="_blank" rel="noreferrer" className="button">E-Com ($1499)</a>
        </li>


</ul>
      </div>
    </div>
  </div>
  
</div>
<div style={{display:'flex', justifyContent:'center'}}><Link className="button" to="/about/">Learn More About VidSocks</Link> </div>







    <div className="spacer33"></div> 
    {/* <div className="spacer66"></div>  */}
  </Layout>
)

export default Thanks
