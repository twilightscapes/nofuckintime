import * as React from "react"
import { Layout } from "../components/layout"
import "../assets/scss/style.scss"
import ReactPlayer from 'react-player/lazy'
import { StaticImage } from "gatsby-plugin-image"
import SignUp from "../components/newssign"
import { Link } from "gatsby"

// import { StaticImage } from "gatsby-plugin-image"











export default function CustomerPage() {
   return (


    
    <Layout className="page">


 
    
<div className="frontgrid">
  <div className="grid__item">
    <div className="frontcontent1">
      <div className="content-inside11">
        {/* <h2>2:1</h2>
        <p>Centered</p> */}

<ReactPlayer
  style={{position:'absolute', width:'', height:'100%', border:'0px solid blue'}}
        id="mobilePlayer1"
          className='react-player6'
          url="https://youtu.be/YaVp_xXotxo"
          width="100%"
          height="100%"
          autoplay={true}
          background={true}
          loop
          playing
          playsinline
          muted={true}
          showPortrait
          playIcon={
            <button aria-label="Click To Play" className="clickplay" style={{position:'relative', zIndex:'5', top:'0', border:'0px solid red', width:'100%', height:'100%', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>

        <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
          {/* <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} /> */}

          <div style={{position:'relative', maxWidth:'50vw', margin:' 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
  <StaticImage className="homepage-bg" src="../../static/assets/vidsock-logo.svg" alt="VidSock" style={{ maxWidth:'28vw', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
</div>
      
          <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
  
          </div>
          </button>}
            light="../assets/transparent.png"
          />


  


      </div>
    </div>
  </div>
  <div className="grid__item" style={{padding:'0 1rem'}}>

      <SignUp />

  </div>
  <div className="grid__item">
    <div className="frontcontent">
      <div className="content-inside">
        <h2>1:1</h2>
        <p>Lower Left</p>
      </div>
    </div>
  </div>
  <div className="grid__item">
    <div className="frontcontent">
      <div className="content-inside">
        <h2>1:1</h2>
        <p>Lower Left</p>
      </div>
    </div>
  </div>
  <div className="grid__item">
    <div className="frontcontent content-lr">
      <div className="content-inside">
        <h2>1:1</h2>
        <p>Lower Right</p>
      </div>
    </div>
  </div>
</div>
       


    
    </Layout>

  )
}
