
import * as React from "react"
import styled from "styled-components"
// import { Link } from 'gatsby'
// import { CgInfo, CgRatio  } from "react-icons/cg"
// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'
import Newsignup from "../components/newssign"
// import { RiSecurePaymentLine } from "react-icons/ri"
// import { HiOutlineScale } from "react-icons/hi"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
const CustomBox = styled.div`

.infomenu{

   border-radius:12px;
   filter: drop-shadow(0px 0px 10px rgba(155,155,155,.5)); 
//    background:rgba(0,0,0,0.08) !important;
}

`

const NFTDetails = () => (

<CustomBox style={{}}>


<Tabs className="infomenu" style={{minHeight:'20vh', width:'100%', maxWidth:'', overflow:'hidden', marginTop:'0',}}>
        {/* <h2 style={{fontSize:'140%', textAlign:'center', margin:'1rem 0'}}>How VidSocks Work</h2> */}
    <TabList style={{width:'100%', border:'0px solid yellow',}}>
    <Tab><div className="iconmenu"><span>About</span></div></Tab>
    <Tab><div className="iconmenu"><span>Platform</span></div></Tab>
    <Tab><div className="iconmenu"><span>Features</span></div></Tab>
    <Tab><div className="iconmenu"><span>Get Yours</span></div></Tab>

      {/* <Tab><div className="iconmenu"><CgInfo /><span>FAQ</span></div></Tab> */}
      
      
    </TabList>
 

   <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
           <strong style={{fontSize:'1.5rem'}}>VidSock is the World's <strong>FIRST and ONLY</strong>, 100% dedicated artist marketing platform!</strong><br /><br />
           <p>
           Why spend all those countless hours and tons of effort in making a name for yourself, but it's on someone else's platform?<br /> <br />
           Market all of your NFTs, portfolio pieces, blog posts, video posts, from one easy to use website that you own forever - for free! 
           <br /> <br />
           Point your own domain name at it and you have a complete web NFT portfolio marketing solution.<br /> <br />

           </p>
           
    </TabPanel>



    <TabPanel style={{padding:'0 1.5rem', width:'100%',}}>
            <strong style={{fontSize:'1.5rem'}}>Built for Artists by an Artist.</strong><br /><br />

            <p>VidSocks are maximized for your artwork. Moving everything out of the way and putting your work front and center.
            </p>

        <p>Support for all of your projects - whether you want to market your OpenSea NFTs, embed your Foundation page, or show your artwork off in the best fashion, VidSocks make it copy and paste EASY. </p>

            {/* <p>The VidSock platform is built using the very latest tools and techniques in web development. It's built correctly, from the ground up. 
            <br />
            <br />
             Google just loves VidSocks. All VidSocks score almost perfect scores across the board on Google's own criteria and tools.<br />
            <br />
                Social Media loves VidSocks. All VidSocks fully support all of the social media structured data rules, meaning your posts show up beautifully everywhere when shared.
            </p> */}

    </TabPanel>


    <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
    <strong style={{fontSize:'1.5rem'}}>Built Right In All The Right Spots</strong><br /><br />


    {/* <strong style={{fontSize:'1.3rem'}}>The VidSock Platform was built for the specific needs of photographers and other creative artists because it was built by one.</strong> */}
<ol style={{margin:'1rem 3rem'}}>
<li style={{}}>A complete system including video blog with unlimited posts, and customizable home page, about and contact pages with integrated contact form.</li>
<br />
<li style={{}}>Built right in the right places. The site is built from the ground up to utelize modern technologies and yet do so in the correct way and one that Google likes. </li>
<br />
<li style={{}}>Top Scores out of the box - Accessibility, SEO, Best Practices, oh.. and its a full-blown Web App too!</li>
<br />
<li style={{}}>Automated backups with intant rollbacks to any version. Site is automatically load-balanced and served from a Global Edge Network so your site is lightning fast no matter where your visitors come from.</li>
<br />
{/* <li style={{}}>Want just the stats? ok:<br />
100GB/Month Bandwidth<br />
100 Site Form submission per Month<br />
Custom Domain names available
</li>
<br />
<li style={{}}>Need more? The VidSock Platform also has complete E-Commerce integration with Shopify. Not only will you be able to sell your products right from your blog pages, but we utelize Shopify's Developer API which means it only costs $9 a month to run a full featured store. This saves you almost $20 off their normal base $28 monthly fee.</li>

<li style={{}}>Seo? Social? It's in the bag. Our entire content management system(CMS) behind out platform is designed to make producing top-notch SEO-minded content that ranks incredibly well in Google page rankings. Also, every page and every post has custom graphics for default social image previews and custom page titles and descriptions on social media sites. Our sites kick butt. Don't believe us? Check out how we do with <a href="https://pagespeed.google.com" target="_blank" noreferrer nofollow>Google Page Speed</a>.</li> 




<blockquote className="frontquote" style={{width:'70%', margin:'2rem auto'}}>
<p>Beyond just the best industry-leading performance and visibility, each VidSock Platform has tons of great built-in features such as image zooming, tab panels, custom color options for both light and dark themes. The sites are also user installable PWA (Progressive Web Apps) which means your site can be installed on any device without any need for expensive and complex App Stores.  </p>

<div style={{textAlign:'right', marginRight:'20%', marginTop:'20px'}}> – Todd
</div></blockquote> */}
</ol>





           
    </TabPanel>




    <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
 
          <p>
          <Newsignup />
          </p>
    </TabPanel>



    {/* <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
            <strong style={{fontSize:'1.5rem'}}>FAQ</strong><br /><br />

            <p style={{fontWeight:'bold', marginBottom:'0'}}>So, what do I get?</p>
            <p style={{}}>Upon completion of your purchase, you will receive a ZIP file that contains the original high-resolution image in TIFF format. </p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>What CAN I do with these images?</p>
            <p style={{}}>Almost anything that you want. Print it for your house or office. Use it as a background or desktop for your phone, computer or TV. Make your holiday cards with it. Print it on your favorite coffee mug. You name it!</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>What CAN’T I do with these images?</p>
            <p style={{}}>Basically, don’t be a Dick or a Karen. I am providing high-quality images that cost considerable amounts of both time and money to acquire. I offer these for a low price to encourage people to enjoy my art. <strong>Please don't share the images on the Internet.</strong></p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Do I get the file right away?</p>
            <p style={{}}>Yes, upon completion of transaction</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>What if I lose the file, can I get another copy?</p>
            <p style={{}}>Yes, you can retrieve the original file at any time. You will be sent an email with a link to retrieve.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>What about prints?</p>
            <p style={{}}>I do offer exclusive hand-crafted prints for special circumstances - contact me with your needs if you’re interested. Otherwise, I provide two links to the best printer options available on the upper right-side of the photo pages. The links are affiliate links which provide me a portion of any sales, so I encourage you to print with these services.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>NFTs and image exclusivity</p>
            <p style={{}}>If you wish to buy all rights to an image (exclusivity), all of my images are available for purchase in a non-fungible token version with the transfer of all ownership and the original RAW file included. The image will also be removed from further sales and retired.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Is there a watermark?</p>
            <p style={{}}>No, it is removed on delivery</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Can I print this for my office?</p>
            <p style={{}}>Yes.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Can I print multiple copies?</p>
            <p style={{}}>Yes, if they are for your private use and enjoyment. No, if you want to print them for sale, or for something that relates to being sold or given away.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Can I post it on Facebook or any where online?</p>
            <p style={{}}>Simply answered, No. These images are for your private use and enjoyment only. I make my living on selling these images, so if you provide that to others, it then hurts my ability to further sell those images.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Do I own this photo, copyright or can I claim it as mine?</p>
            <p style={{}}>No, the intellectual rights and copyrights are not transferred in any way and will remain the property of Todd Lambert.</p>

            

            

            <p style={{fontWeight:'bold'}}></p>
            <p style={{}}></p>




    </TabPanel> */}


   

  </Tabs>


</CustomBox>
  
)

export default NFTDetails