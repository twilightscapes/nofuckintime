
import * as React from "react"
import styled from "styled-components"
// import { Link } from 'gatsby'
// import { CgInfo, CgRatio  } from "react-icons/cg"
// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'
import CommentBox from "../components/commentbox"
// import { RiSecurePaymentLine } from "react-icons/ri"
// import { HiOutlineScale } from "react-icons/hi"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
const CustomBox = styled.div`

.infomenu{

   border-radius:12px;
   filter: drop-shadow(0px 0px 10px rgba(155,155,155,.5)); 
   background:rgba(0,0,0,0.08) !important;
}

`

const SupportBox = () => (

<CustomBox style={{}}>


<Tabs className="infomenu" ß style={{minHeight:'20vh', width:'100%', maxWidth:'', overflow:'hidden', marginTop:'0',}}>

<h2 style={{fontSize:'240%', textAlign:'center', margin:'0',  background: 'rgba(0,0,0,0.75)', padding:'.5rem', borderRadius:'12px 12px 0 0'}}>VidSocks Support Portal</h2>

    <TabList style={{width:'100%', background: 'rgba(0,0,0,0.75)', padding:'10px 0 0 0', borderRadius:'0 0 12px 12px', display:'flex', justifyContent:'space-around'}}>

    <Tab><div className="iconmenu">
      {/* <RiSecurePaymentLine/> */}
    <span>Latest News</span></div></Tab>
    <Tab><div className="iconmenu">
      {/* <CgRatio /> */}
      <span>HELP &amp; FAQ</span></div></Tab>
    
    <Tab><div className="iconmenu">
      {/* <HiOutlineScale/> */}
      <span>Tips &amp; Tricks</span></div></Tab>

      {/* <Tab><div className="iconmenu"><FiCamera /><span>Tech</span></div></Tab> */}

      <Tab><div className="iconmenu">
        <span>Open Tickets</span></div></Tab>

        {/* <Tab><div className="iconmenu">
        <span>Discussion</span></div></Tab> */}
      
    </TabList>
 

  



    <TabPanel style={{width:'100%', background: 'rgba(0,0,0,0.75)', padding:'2rem', borderRadius:'12px'}}>
            <strong style={{fontSize:'1.5rem'}}>The VidSocks platform is virtually hack-proof</strong><br /><br />
            <p>Because VidSocks are built using a new method of distributed cloud-based hosting of static text and graphic files there is no server to be hacked. VidSocks are pre-rendered web applications that build the site contents ahead of time and then served as basic media files and assembled in the site visitors browser.
            <br />
             So there are no normal vulnerabilities in running a web server to worry about. There isn't anything for hackers to hack. <br />
            <br />
            
            </p>

    </TabPanel>

    <TabPanel style={{width:'100%', background: 'rgba(0,0,0,0.75)', padding:'2rem', borderRadius:'12px'}}>
            <strong style={{fontSize:'1.5rem'}}>Coming Soon</strong><br /><br />

                <strong style={{fontSize:'1.3rem'}}>FAQs will be available soon.<br /><br /> For Help, please use the support form below to open a ticket.</strong>




    </TabPanel>


    <TabPanel style={{width:'100%', background: 'rgba(0,0,0,0.75)', padding:'2rem', borderRadius:'12px'}}>
    <strong style={{fontSize:'1.5rem'}}>Coming Soon</strong><br /><br />


    <strong style={{fontSize:'1.3rem'}}>Tips a video lessons will be available soon.</strong>




           
    </TabPanel>




    {/* <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
          <strong>Technology</strong><br /><br />
          <p>
          Twilightscapes were shot using: <br /><br />
          Canon 5D series<br /><br />
          Sony A7S series<br /><br />
          Sony A7R series <br /><br />
          </p>
    </TabPanel> */}


<TabPanel style={{width:'100%', background: 'rgba(0,0,0,0.75)', padding:'2rem', borderRadius:'12px'}}>
           <strong style={{fontSize:'1.5rem'}}>VidSocks use metered web services wherever possible</strong><br /><br />
           <div style={{width:'100%', padding:'0', margin:'0 auto'}}>
  
<CommentBox />
    
       </div>
           
    </TabPanel>



   

  </Tabs>


</CustomBox>
  
)

export default SupportBox