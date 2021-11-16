/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import { Footer } from "../components/footer"
// import { GoArrowDown } from "react-icons/go"
import ScrollAnimation from 'react-animate-on-scroll'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
// import Pricing from "../components/pricing"
import styled from "styled-components"
import LHScores from "../../static/assets/LH-Scores.svg"
import NFTDetails from "../components/nft-details"
import SupportBox from "../components/supportbox.js"

import Newsignup from "../components/newssign"
import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
const CustomBox = styled.div`

`



export const pageQuery = graphql`
  query HomeQuery($id: String! ) {
    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
      }

    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        showFeature
        showPosts
        showInfo
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }


 
    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
  
            
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`




const HomePage = ({ data }) => {
  const { iconimage } = useSiteMetadata()
  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""

    // const { iconimage } = useSiteMetadata()


    const { siteUrl } = useSiteMetadata()

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart

    const ShowFeature = frontmatter.showFeature
    const ShowInfo = frontmatter.showInfo
    const ShowPosts = frontmatter.showPosts

  const Svg = frontmatter.svgImage
  const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }



  
function AddSvg(){
  const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
  return (
    <object title="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto',  }} alt="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" >You need a new browser</object>
  )
}



const YouTube = frontmatter.youtuber

  if (!YouTube) {

  }
  else{
    
    <Iframer />
  }

  function Iframer() {
    

    const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
    return (
      <ReactPlayer
      className='react-player66'
      url={Url}
      
      // url={[
      //   iframeUrl,
      //   YoutuberSuggestion1,
      //   YoutuberSuggestion2,
      //   YoutuberSuggestion3
      // ]}
      width="100%"
      height="100%"
 
      config={{
        youtube: {
          playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
        },
      }}
      loop
      playing
      playsinline
//       playIcon={
//         <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>

//     <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', margin:'0 auto'}}>
      

//       <div style={{position:'relative', maxWidth:'100vw', margin:'4% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
// <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', maxWidth:'30vw', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
// </div>
  
//       <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
// <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
//       </div>
//       </button>}
//         light="../assets/transparent.png"
      />
    )
  }

  


  
  return (
    
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage" />
  
</Helmet>
<Seo
          title={`Best website design builder for artists, photographers, musicians, clubs/restaurants and other small businesses`}
          description={`Next-gen multimedia video blogs inside the fastest cloud-based web platform`}
          image={'https://vidsock.com/default-og-image.jpg'}
        />
       {/* <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
  //       image={photoUrl}
  //  photoUrl

   image={ siteUrl + getSrc(frontmatter.featuredImage) }

      /> */}
      
      

<div className="">
      {/* <StaticImage alt="Todd Lambert Web development for photographers" src="../../static/assets/vidsock-explain1.jpg" /> */}

      {/* <StaticImage alt="Todd Lambert Web development for photographers" src="../../static/assets/vidsock-" /> */}

      <ScrollAnimation className="" animateIn="" delay={4050} initiallyVisible={true} animateOnce={true} animatePreScroll={true} style={{position:'fixed', zIndex:'-1', opacity:'.2', width:'100%'}}>


      <div style={{display:'flex', justifyContent:'center', width:'100vw'}}>
      <object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{  overflow:'hidden', border:'0px solid red', zIndex:'0', width:'55%', maxWidth:'', height:'55%', background:'transparent'  }} alt="animated content" title="animated content" >You need a new browser</object>
</div>
</ScrollAnimation>





        <div name="container21" className="container21" style={{marginTop:'',}}>



{/* show feature */}
        {ShowFeature ? (
            
       
          


        
<section style={{ }}>
  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>




{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'', border:'0px solid red !important'}}
            />
            
          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}






{/* if(navigator.standalone) {
    "Thanks for using our PWA!"
} else {
    "Please consider downloading our PWA."
} */}





 

  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}





{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'0', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}


  
{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}




      </div>
  </article>
</section>

) : (
  ""
)}
{/* end show feature */}





<br />

{/* show Info */}
{ShowInfo ? (
            
       
// {frontmatter.title}

<section className="" id="logointro" style={{ display:'', height:'', overflow:'', paddingTop:''}}>
  <article>
  <h1 className="title1 " style={{padding:'1rem 10%', color:'#fff', textShadow:'2px 2px 0 #222'}}>VidSocks Web Apps<br /><span style={{fontSize:'68%',}}>Best website design builder for artists, photographers, musicians, clubs / restaurants and  small business</span></h1>


  <h2
            className="title1 "
            style={{fontSize:'', padding:'1rem 10%', color:'#fff', textShadow:'2px 2px 0 #222' }}
          >
            {frontmatter.tagline}
          </h2>

<br />

  <div id="" className="flexbutt" style={{display:'flex', gap:'30px', justifyContent:'', alignItems:'baseline', color:'#fff', textShadow:'1px 1px 0 #000', padding:'0 4%'}}>



        
<div id="greeting" className="flexcheek" style={{ position:'', top:'', order:''}} >
 
 

 <ScrollAnimation className="" animateIn="bounceInUp" delay={80} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{ background: 'rgba(0,0,0,0.50)', padding:'2rem ',
          backdropFilter: 'blur(4px)', border:'1px solid #000', borderRadius:'12px', textAlign:'', alignSelf:'', }}>




{/* <div style={{position:'absolute', top:'0', zIndex:'0'}}> */}
      {/* {SecondaryImage ? (
       <GatsbyImage
         image={SecondaryImage}
         alt={frontmatter.title + " - Featured image"}
         className="post-card"
         style={{border:'1px solid blue', width:'100%', height:'', maxHeight:'70vh',  borderRadius:'12px !important', position:'absolute', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
       />
     ) : (
       ""
     )} */}
{/* </div> */}
<div
     
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
{/* <Link
       to={frontmatter.cta.ctaLink}
       className="button fire actionJackson"
       style={{
         cursor:'pointer',
         width:'80%',
         maxWidth:'600px',
         margin:'0 auto',
         display:'flex',
         alignSelf:'center',
         color:'#ccc'
       }}
     >
       {frontmatter.cta.ctaText}
       <span className="icon -right">
         <RiArrowRightSLine />
       </span>

       
     </Link> */}
     
     <div style={{display: '', flexDirection:'', justifyContent:'', padding:'0 0 0 0', fontSize:'.8rem', textAlign:'center'}}>
     


{/* <StaticImage src="../../static/assets/LIGHTHOUSE-100s-SCORE.png" alt="Lighthouse Scores for VidSocks" width="750" height="176" className="rounded" /> */}
     
<LHScores />


     <a target="_blank" rel="noreferrer" className="button" style={{textDecoration:''}} href="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https://vidsock.com%2F&amp;strategy=mobile&amp;category=performance&amp;category=accessibility&amp;category=best-practices&amp;category=seo&amp;category=pwa&amp;utm_source=lh-chrome-ext">Verify Our Google Scores</a>
     <br />Opens Full Google Speed Report (slow to load) 
     
     </div>


</ScrollAnimation>
 

 </div> 






      <div id="intro" className="flexcheek" style={{order:''}}>
 
 

      <ScrollAnimation className="" animateIn="bounceInUp" delay={250} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{ background: 'rgba(0,0,0,0.30)', padding:'1rem 2rem ',
          backdropFilter: 'blur(4px)', border:'10px double #fff', borderRadius:'12px', textAlign:'', alignSelf:'', }}>


   

{/* <div style={{position:'absolute', top:'0', zIndex:'0'}}> */}
           {/* {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="post-card"
              style={{border:'1px solid blue', width:'100%', height:'', maxHeight:'70vh',  borderRadius:'12px !important', position:'absolute', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
            />
          ) : (
            ""
          )} */}
{/* </div> */}



  <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 0 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'uppercase', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000' }}>Launch Your Web App</span>

<br />

ready to use = nothing to learn<br />
serverless = no WordPress<br />
cloud hosting = free forever<br />
<span  className="neonText">single price = no monthly fees<br />
</span>
<br />
<span style={{color:'', fontSize:'90%'}}>Fast | Flexible | Features | Secure</span>
<br /><br />
<span style={{color:'', fontSize:'70%'}}>Get the details sent to your email:</span>

{/* <span style={{color:'', fontSize:'70%'}}>Complete website solutions</span> */}

{/* <br /><span style={{color:'#37f011', fontSize:'70%'}}>($50 value)</span> */}

{/* <span style={{color:'', fontSize:'70%'}}>Act Now - get 30 minutes of Customization </span><br /><span style={{color:'#37f011', fontSize:'70%'}}>($50 value)</span> */}
{/* <br />
<span style={{fontSize:'56%'}}>E-commerce and Custom Packages available</span>
<br /><br /> */}
</h2>
{/* <Link
            to={frontmatter.cta.ctaLink}
            className="button fire actionJackson"
            state={{modal: true}}
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ff0000'
            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>

            
          </Link> */}
          <Newsignup />
          
          <br /><br /> 
          {/* <div style={{fontSize:'70%', textAlign:'center'}}>* Virtually all sites operate month-to-month with no fees. 
          <br />
          Some sites, under heavy usage can incur fees, as outlined by our hosting partner Netlify.<br /> <a href="https://www.netlify.com/pricing/" target="_blank" rel="noreferrer" >You can view more information here.</a></div> */}





</ScrollAnimation>
      







      </div> 
</div>
</article>
</section>


) : (
  ""
)}
{/* end show Info */}


{/* start show Posts */}
{ShowPosts ? (


""
  

   ) : (
  <div id="posts" name="posts">
        <BlogListHome data={posts} />

        <section style={{height:'auto'}}>
  <Link to="/posts/2/" style={{display:'block', width:'100%'}}><article className="post-card" style={{height:'50%', display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid', padding:'2rem', fontSize:'200%', textAlign:'center' }}>
    View More <RiArrowRightSLine style={{fontSize:'50px'}} />
    </article></Link>
    </section>

   </div>
  )}
{/* end show Posts */}





{/* <SparkyIntro /> */}

{/* <div className="spacer66"></div> */}
<div id="features" className="">
<div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', alignItems:'baseline', gap:'30px', color:'#fff'}}>



  <div className="flexcheek" >
    <div className="frontcontent"><ScrollAnimation className="" animateIn="bounceInLeft" delay={50} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
      <div className="content-inside" style={{padding:'8px', textAlign:'left'}}>
        <h2 className="vartext txtshadow">All VidSocks include:</h2>
          
        <ul className="featurelist" style={{listStyleType:'none'}}>
        <li>User-installable PWA (Progressive Web Apps) which means your site can be installed on any device without the need for expensive and complex App Stores.</li>
        <li>Hosted on Global Edge Network (the cloud)</li>
        <li>Automated backups with intant rollbacks to any version.</li>
        <li>FREE - 100GB/Mo Bandwidth</li>
<li>FREE - 100 Site Form Submits per Mo</li>
<li>FREE Secured Socket Layer (SSL) Cert (https://)</li>
<li>Customizable with your own domain name</li>
<li>Responsive Design, built with React and Gatsby</li>
<li>Dark / Light Mode (also full support for all web accessibility guidelines)</li>


</ul>
      </div></ScrollAnimation>
    </div>
  </div>





  <div className="flexcheek">
    <div className="frontcontent"><ScrollAnimation className="" animateIn="bounceInUp" delay={80} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
      <div className="content-inside" style={{padding:'8px'}}>
        <h2 className="vartext txtshadow">VidSocks Features:</h2>

        <ul className="featurelist" style={{listStyleType:'none'}}>






<li>Customize all content of included Homepage, About and Contact page. Add / Modify / Delete blog posts.</li>

<li>Edit website settings, Add Google Analytics change colors, settings, logos, etc all from within the CMS.</li>


<li>Hide/Show Comments, Social Sharing, or User-interactivity (youtube video changer) on a post-by-post basis</li>

<li>Control YouTube videos with starting/stopping times, loop, mute, etc..</li>

<li>PWA Exclusive Content (make some of your content only available to your site's user base - great to boost engagement!)</li>

<li>Drop Timers - Easily create your own Drops. Make posts appear when your NFT drops. Just add the drop date and time</li>

<li>Your Stuff is SAFE - All stored in native image formats and markdown files that are downloadable at any time</li>
{/* <li>Auction Timers - Make posts disappear when your auction expires</li> */}

</ul>
      </div></ScrollAnimation>
    </div>
  </div>

  



  <div className="flexcheek">
    <div className="frontcontent content-lr">
    <ScrollAnimation className="" animateIn="bounceInRight" delay={100} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
      <div className="content-inside">
        <h2 className="vartext txtshadow">More Features:</h2>
        <ul className="featurelist" style={{listStyleType:'none'}}>
        

<li>100% SEO Optimized - Google LOVES VidSocks. </li>

<li>Full Privacy Compliance Support (GDPR and CCPA). </li>

<li>Contact Form - an integrated contact form on all pages of the your site, that sends everything right to your email inbox.</li>

<li>E-Newsletter Form - Build your email newsletter by allowing peole to easily sign up</li>

<li>Social Media Icons - link to all your sites and allow users to easily share your content</li>

<li>OpenGraph structured data - all of site is structured to be shared with high quality image links on social sites</li>

<li>Twitter Cards meta - Your pages will look great when shared on Twitter</li>

<li>XML Sitemaps - Your entire site is automatically indexed and links provided to search engines.</li>






</ul>
      </div></ScrollAnimation>
    </div>
  </div>
  
</div>
</div>

{/* <SparkyIntro /> */}
{/* <div className="spacer66"></div> */}


<ScrollAnimation animateIn="bounceInUp" delay={250} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>

<section className="outer section section--gradient fluff txtshadow" >
      <div className="container" style={{padding: '2rem 10%', color:'#fff'}}>

{/* <h2>Start with the best built website and then make sure it's as fast as can be. Then make some of the most innovative features that nobody else has. Finally, make sure it's virtually hack-proof, easy to use and ready to go!</h2>

<br />
<p>VidSocks use the industry best cloud-based tools for things like user commenting, analytics, and e-commerce.</p> */}






<h2 id="costs" className="letter" style={{fontSize:'240%', textAlign:'center'}}>VidSocks Run Free Of Cost</h2>
<p style={{fontSize:'150%', textAlign:'center'}}>VidSocks users have <u>NO</u> monthly costs.

</p> 


<ScrollAnimation className="" animateIn="bounceInLeft" delay={100} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
<div className="flexbutt featurebox" style={{display:'flex', padding:'0', gap:'20px',}}>


<div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">Cloud Hosting</h3>
<div style={{}}>Virtually all sites operate month-to-month for <strong className="highlight">FREE</strong>. 
          <br />
          Some sites, under heavy usage can incur fees, as outlined by our hosting partner Netlify.<br /> <a style={{textDecoration:'underline'}} href="https://www.netlify.com/pricing/" target="_blank" rel="noreferrer" >View more information here.</a></div>
</div>

<div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">Analytics</h3>
<p>VidSocks have complete integration with Google Analytics. Simply copy and paste your account tracking code into the CMS settings. You can track your website performance for <strong className="highlight">FREE</strong>!</p>
</div>

<div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">E-Commerce</h3>
<p>Complete Shopify API integration with Shopify shopping cart built-in.
Get FULL Shopify functionality directly inside your site.
   <br />Using their API costs only <strong className="highlight">$8.99mo</strong>.</p>
</div>
</div>
</ScrollAnimation>









<ScrollAnimation className="" animateIn="bounceInRight" delay={110} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
<div className="flexbutt featurebox" style={{display:'flex', marginTop:'20px', padding:'', gap:'20px'}}>


<div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">Social Sharing</h3>
<p>Why pay for plugins just to allow for your users to share your content? VidSocks have social sharing built-in, just switch it on or off for <strong className="highlight">FREE</strong>.</p>
</div>

<div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">AdFree YouTube</h3>
<p>We use AdFree YouTube to remove ads. This means you have complete control of your videos without any ads - that's right, no YouTube ads for <strong className="highlight">FREE</strong>.</p>
</div>

{/* <div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.30)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">NFT Features</h3>
<p>Setup countdown timers for your own NFT Drops!  <br /> Embed your Foundation or OpenSea into your posts. Just copy and paste the share code.</p>
</div> */}
<div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">Comments</h3>
<p>We use CommentBox.io for our commenting needs. Most sites will not exceed their generous 100 comments a month, so in essense you get great comments without ads, for <strong className="highlight" style={{color:''}}>FREE</strong>! </p>
</div>


</div>
</ScrollAnimation>


      </div>
</section>
</ScrollAnimation>


</div>




<div className="container txtshadow has-app" style={{ maxWidth:'1024px', textAlign:'', alignSelf:'', color:'#fff' }}>

<SupportBox />
</div>
<br />

{/* <div className="spacer66"></div> */}
{/* <SparkyIntro /> */}

<div id="cms" className="container " style={{padding:'0 8%', maxWidth:'1024px', color:'#fff'}}>
<section style={{ display:'',}}>
  <article>
  <h2 className="letter txtshadow" id="options" style={{fontSize:'200%', textAlign:'center'}}>Using VidSocks <br />(<span  className="highlight" style={{fontSize:'80%'}}>It's Super Easy!</span>)</h2>

<p className="txtshadow" style={{fontSize:'150%', textAlign:'center'}}>Quickly add content to your site by<br />just answering a couple of questions on a web form. </p>
  {/* <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}> */}


  </article>

  </section>
</div>




<ScrollAnimation className="" animateIn="zoomInUp" delay={50} initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className='player-wrapper' style={{position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', margin:'0 4%', filter: 'drop-shadow(0 0 20px #000)', borderRadius:'12px' }}>


<ReactPlayer
          className='react-player'
          url="https://www.youtube.com/embed/NPzXWpNKScY?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=NPzXWpNKScY"
          width="100%"
          height="100%"
     
     style={{ background: 'rgba(0,0,0,0.30)'}}
          autoplay={false}
          // background={true}
          loop
          playing
          playsinline
          muted={true}
          showPortrait
          playIcon={
            <button aria-label="Click To Play" className="clickplay1" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh',  background: 'rgba(0,0,0,0.20)', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex',  verticalAlign:'center', justifyContent:'center', paddingTop:'20%'}}>
              
      
      
      
        <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
          <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      
          <span style={{fontWeight:'bold', padding:'0 0 0 1rem', fontSize:'30px'}}>Click To Play Video</span>
          
          </div>
          </button>}
      
      
      
            light="../assets/transparent.png"
          />

{/* <div className="video-background">
    <div className="video-foreground">
      <iframe title="Twilightscapes Video" className="" src="https://www.youtube.com/embed/fm-rOnGIIaE?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=fm-rOnGIIaE" frameBorder="0" allowFullScreen></iframe>
    </div>
</div> */}



</div>
</ScrollAnimation>

{/* <div className="spacer66"></div> */}
{/* <SparkyIntro /> */}




<br /><br />

<div className="container txtshadow " style={{padding:'0 8%', maxWidth:'1024px'}}>
<section style={{ display:'', color:'#fff'}}>
  
<h2 className="headline" style={{fontSize:'220%', textAlign:'center', textShadow:'0 2px 2px #000'}}>Got Questions?
<br />
{/* <span style={{fontSize:'80%',}}>Pay ONCE + FREE to operate</span><br />  */}
<span style={{fontSize:'80%', textAlign:'center', textShadow:'0 2px 2px #000'}}>We've Got Answers</span>
</h2>

</section>
</div>

<br /><br />
<div className="container txtshadow " style={{ maxWidth:'1024px', textAlign:'', alignSelf:'', color:'#fff' }}>

<NFTDetails />
</div>




<br /><br />

<div className="container txtshadow " style={{padding:'0 8%', maxWidth:'1024px'}}>
<section id="buy" style={{ display:'', color:'#fff'}}>
  
<h2 className="headline" style={{fontSize:'220%', textAlign:'center', textShadow:'0 2px 2px #000'}}>Fastest Websites<br />More Features<br />One-Time Cost
<br /><br />
<span style={{fontSize:'70%',}}>Pay ONCE + FREE to operate<br /> <span  className="highlight">No hidden costs</span>.</span>
</h2>
{/* <p>Whatever your needs are, we have you covered. Both packages receive the base setup while the E-commerce package adds integration with Shopify. </p> */}

</section>
  </div>

  <div className="">

  <div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', alignItems:'baseline', gap:'30px'}}>



  {/* <div className="flexcheek" >
    <div className="frontcontent">
    <ScrollAnimation className="" animateIn="bounceInLeft" delay={100} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
      <div className="content-inside" style={{padding:'8px', textAlign:'center', color:'#fff'}}>
        <h2 className="vartext txtshadow">VidSocks - Standard </h2>
          
        <ul className="featurelist" style={{listStyleType:'none'}}>
        <li>No Customization - Ready to Use!
    
          <br />
          <br />
          <a href="https://secure3.myshopify.com/cart/41327956492448:1?channel=buy_button" target="_blank" rel="noreferrer" className="button">Standard ($499)</a>
        </li>
        <li className="fluff">Includes 1 hour of Video Resources</li>
        <li className="fluff">AdFree YouTube Tech - No ADs!</li>
        <li className="fluff">Easy Content Management System (CMS)</li>
        <li className="fluff">Basic Video Controls - no audio tracks</li>
        <li className="fluff">Basic Updates Only</li>

</ul>
      </div></ScrollAnimation>
    </div>
  </div> */}



  <div className="flexcheek">
    <div className="frontcontent">
    <ScrollAnimation className="" animateIn="bounceInUp" delay={100} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
      <div className="content-inside" style={{padding:'8px',textAlign:'center', color:'#fff'}}>
        <h2 className="vartext txtshadow letter" style={{fontSize:'200%', border:'3px solid #fff', borderRadius:'12px', background: 'rgba(0,0,0,10)',}}>VidSocks - Pro</h2>

        <ul className="featurelist" style={{listStyleType:'none'}}>




        <li>Includes 2 hrs of Unique Customizations
          <br />
    
          {/* <span style={{color:'#37f011'}}>Recommended:</span> */}
          <br />
          <a href="https://secure3.myshopify.com/cart/41327989391520:1?channel=buy_button" target="_blank" rel="noreferrer" className="button fire" style={{border:'1px solid hotpink'}}>Pro ($499)</a>

          <br />
          <br />
        </li>
        <li className="fluff">Includes 1 hour of Video Resources</li>
        <li className="fluff">Advanced audio/video control start.stop times.</li>
        <li className="fluff">AdFree YouTube Portal - watch videos with No ADs!</li>
        <li className="fluff">Advanced Content Management System</li>
        <li className="fluff">Full Updates - All new features included</li>



</ul>
      </div></ScrollAnimation>
    </div>
  </div>

  <div className="flexcheek">
    <div className="frontcontent content-lr">
    <ScrollAnimation className="" animateIn="bounceInRight" delay={100} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
      <div className="content-inside" style={{padding:'8px',textAlign:'center', color:'#fff'}}>
      <h2 className="vartext txtshadow letter" style={{fontSize:'200%', border:'3px solid #fff', borderRadius:'12px', background: 'rgba(0,0,0,10)',}}>VidSocks - E-Com</h2>
        <ul className="featurelist" style={{listStyleType:'none', borderRadius:'52px'}}>
        

        <li>Includes 4 hrs of Unique Customizations

          <br />
          <br />
          <a href="https://secure3.myshopify.com/cart/41328406036640:1?channel=buy_button" target="_blank" rel="noreferrer" className="button fire" style={{border:'1px solid hotpink'}}>E-Com ($899)</a>

          <br />
          <br />
        </li>
        <li className="fluff">Includes 1 hour of Video </li>
        <li className="fluff">Includes 1 hour of Advanced Resources</li>
        <li className="fluff">Advanced audio/video control start.stop times.</li>
        <li className="fluff">AdFree YouTube Portal - watch videos with No ADs!</li>
        <li className="fluff">Advanced Content Management System</li>
        <li className="fluff">Complete Shopify Integration (requires separate Shopify Account)</li>
        <li className="fluff">Full Updates - All new features included</li>

</ul>
      </div></ScrollAnimation>
    </div>
  </div>
  </div>
</div>













<br />





{/* <div className="container txtshadow" style={{padding:'2rem 8%', maxWidth:'1024px'}}>
<section style={{ display:'', color:'#fff'}}>
  <article>
<h2 style={{fontSize:'200%'}}>Using the VidSock CMS (content management system)</h2>

<p>You don't need to take classes and read tutorials to be able to quickly edit and add content to your site. The VidSock platform makes it as easy as just answering a couple of questions and filling out some forms. </p>



  </article>

  </section>
</div> */}









<br /><br /><br />

{/* <h3 style={{fontSize:'170%', textAlign:'center',margin:'2rem 0 0 0'}}>Got Questions? Feel free to contact us</h3> */}

 </div>{/* end scooch */}

      
      



<Footer />
    </Layout>
    </CustomBox>
    
    
  )
}

export default HomePage