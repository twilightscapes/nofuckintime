import React from "react"
import { graphql } from "gatsby"

import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player/lazy'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { FaHandPointDown } from "react-icons/fa"
// import GoBack from "../components/goBack"
// import Newsignup from "../components/newssign"
// import NFTDetails from "../components/nft-details"
export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`


const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  easing: 'easeIn',
  arrows: false,

  // prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
  // nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
};


const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />


      {/* <div className="container" style={{padding:'2rem 8%', maxWidth:'1024px'}}> */}


      {/* <div className="mobile"><GoBack /></div> */}


      {/* <section className="article-header" style={{textAlign:'left', margin:'0 4%', height:'auto'}}>
            <h1>{frontmatter.title}</h1>
            <time sx={{color: "muted"}}>{frontmatter.date}</time>
          </section>

        <article dangerouslySetInnerHTML={{ __html: html }} /> */}
        {/* <NFTDetails /> */}

      {/* </div> */}


      {/* <div className="frontgrid">
  <div className="grid__item">
    <div className="frontcontent1">
      <div className="content-inside11" style={{padding:'1rem'}}>


      <object className="" id="animated-svg" data="../assets/crude-addiction.svg" type="image/svg+xml" style={{position:'', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'', height:'auto', background:'transparent'  }} alt="animated content" title="animated content" >You need a new browser</object>





      </div>
    </div>
  </div>
  <div className="grid__item" style={{padding:'0 1rem'}}>

      <Newsignup />

  </div>
  </div> */}







<StaticImage alt="Todd Lambert Web development for photographers" src="../../static/assets/vidsock-explain1.jpg" />

<div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', gap:'30px'}}>
  <div className="flexcheek" >
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px', textAlign:'left'}}>
        <h2>All VidSocks include:</h2>
          
        <ul className="featurelist" style={{listStyleType:'none'}}>
        <li>User-installable PWA (Progressive Web Apps) which means your site can be installed on any device without the need for expensive and complex App Stores.</li>
        <li>Hosted on Global Edge Network (the cloud)</li>
        <li>FREE - 100GB/Mo Bandwidth</li>
<li>FREE - 100 Site Form Submits per Mo</li>
<li>FREE Secured Socket Layer (SSL) Cert (https://)</li>
<li>Customizable with your own domain name</li>
<li>Responsive Design, built with React and Gatsby</li>
<li>Dark / Light Mode (also full support for all web accessibility guidelines)</li>

</ul>
      </div>
    </div>
  </div>
  <div className="flexcheek">
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px'}}>
        <h2>VidSock Features:</h2>

        <ul className="featurelist" style={{listStyleType:'none'}}>




<li>Edit website settings, Add Google Analytics change colors, settings, logos, etc all from within the CMS.</li>

<li>Customize all content of included Homepage, About and Contact page. Add / Modify / Delete blog posts.</li>


<li>Hide/Show Comments, Social Sharing, or User-interactivity (youtube video changer) on a post-by-post basis</li>

<li>Control YouTube videos with starting/stopping times, loop, mute, etc..</li>

<li>PWA Exclusive Content (make some of your content only available to your site's user base - great to boost engagement!)</li>

<li>Drop Timers - Easily create your own Drops. Make posts appear when your NFT drops. Just add the drop date and time</li>

<li>Auction Timers - Make posts disappear when your auction expires</li>

</ul>
      </div>
    </div>
  </div>

  <div className="flexcheek">
    <div className="frontcontent content-lr">
      <div className="content-inside">
        <h2>More Features:</h2>
        <ul className="featurelist" style={{listStyleType:'none'}}>
        

<li>100% SEO Optimized - Google LOVES VidSocks. </li>

<li>Social Media Icons - link to all your sites and allow users to easily share your content</li>

<li>OpenGraph structured data - all of site is structured to be shared with high quality image links on social sites</li>

<li>Twitter Cards meta - Your pages will look great when shared on Twitter</li>

<li>XML Sitemaps - Your entire site is automatically indexed and links provided to search engines.</li>

<li>Contact Form - an integrated contact form on all pages of the your site, that sends everything right to your email inbox.</li>

<li>E-Newsletter Form - Build your email newsletter by allowing peole to easily sign up</li>
</ul>
      </div>
    </div>
  </div>
</div>



{/* <button onClick="playAnimation()" type="button">Start Animation</button> */}

<br /><br /><br />
{/* <button className="square" onClick={() => console.log('click')}>
       DAMN
     </button> */}


{/* <div className="spacer33"></div> */}

<div className="container" style={{padding:'2rem 8%', maxWidth:'1024px'}}>
<section style={{ display:'',}}>
  <article>
<h2 style={{fontSize:'200%'}}>Using the VidSock CMS (content management system)</h2>

<p>You don't need to take classes and read tutorials to be able to quickly edit and add content to your site. The VidSock platform makes it as easy as just answering a couple of questions and filling out some forms. </p>
  {/* <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}> */}


  </article>

  </section>
</div>


<div className='player-wrapper' style={{position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>


<ReactPlayer
          className='react-player'
          url="https://www.youtube.com/embed/NPzXWpNKScY?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=NPzXWpNKScY"
          width="100%"
          height="100%"
     
 
          autoplay={true}
          background={true}
          loop
          playing
          playsinline
          muted={true}
          showPortrait
        //   playIcon={
        //     <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', paddingTop:'10%'}}>
              
      
      
      
        // <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
        //   <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      
        //   <span style={{fontWeight:'bold', padding:'0 0 0 1rem', fontSize:'60px'}}>Click To Play</span>
          
        //   </div>
        //   </button>}
      
      
      
        //     light="../assets/transparent.png"
          />

{/* <div className="video-background">
    <div className="video-foreground">
      <iframe title="Twilightscapes Video" className="" src="https://www.youtube.com/embed/fm-rOnGIIaE?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=fm-rOnGIIaE" frameBorder="0" allowFullScreen></iframe>
    </div>
</div> */}



</div>


<h3 style={{fontSize:'170%', textAlign:'center',margin:'2rem 0 0 0'}}>Got Questions? Feel free to contact us</h3>

<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />




  <div  className="slidecom" style={{position:'relative', overflow:'', height:'', zIndex:'0', display:'none'}}>
  

        


         <Fade {...properties}>


       

          <div className="each-slide">
    
              <div style={{position:'absolute', zIndex:'50', width:'', textAlign:'center', border:'0px solid green', marginLeft:'15%', top:'150px'}}>
                <h3 style={{color:'#fff', fontSize:'30px'}}>The Rolex Collection</h3>
                <a href="" style={{color:'#fff'}}>View All Watches</a>
                
                </div>

<a href="/capabilities/" style={{color:'#fff'}}>
  <StaticImage alt="Todd Lambert Web development for photographers" src="../../static/assets/Experiences-Header-1.jpg" />
  </a>
            </div>
 

          <div className="each-slide">
            <a href="capabilities/" style={{color:'#fff'}}>
            <StaticImage alt="Todd Lambert Web development for photographers" src="../../static/assets/Experiences-Header-2.jpg" />
              </a>
            </div>

            <div className="each-slide">
            <a href="capabilities/" style={{color:'#fff'}}>
            <StaticImage alt="Todd Lambert Web development for photographers" src="../../static/assets/Experiences-Header-3.jpg" />
              </a>
            </div>


           

    

          <div className="each-slide">
            <div>
              <span>Slide 3</span>
              <StaticImage alt="Todd Lambert Web development for photographers" src="../../static/assets/Experiences-Header-4.jpg" />
            </div>
          </div>
        </Fade>
      </div>




      {/* <GoBack /> */}
      <br />
      <br />
    </Layout>


  )
}

export default AboutPage
