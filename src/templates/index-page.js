/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import { Footer } from "../components/footer"
// import { GoArrowDown } from "react-icons/go"
// import ScrollAnimation from 'react-animate-on-scroll'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
// import Pricing from "../components/pricing"
import styled from "styled-components"
import LHScores from "../../static/assets/LH-Scores.svg"
import NFTDetails from "../components/nft-details"
// import SupportBox from "../components/supportbox.js"

import { SRLWrapper } from "simple-react-lightbox"

import Newsignup from "../components/newssign"
import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
const CustomBox = styled.div`

#container {
  color:#999;
  text-transform: uppercase;
  font-size:36px;
  font-weight:bold;
  padding-top:200px;  
  position:fixed;
  width:100%;
  bottom:45%;
  display:block;
}

#flip {
  height:50px;
  overflow:hidden;
}

#flip > div > div {
  color:#fff;
  padding:4px 12px;
  height:45px;
  margin-bottom:45px;
  display:inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  // background:#42c58a;
}
#flip div:first-child div {
  // background:#4ec7f3;
}
#flip div:last-child div {
  // background:#DC143C;
}

@keyframes show {
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}
}










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
      limit: 1
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
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    // const SecondaryImage = frontmatter.secondaryImage
    // ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    // : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""

    // const { iconimage } = useSiteMetadata()


    // const { siteUrl } = useSiteMetadata()

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
    <object title="Animation: VidSocks Logo" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto',  }} alt="Animation: VidSocks Logo" >You need a new browser</object>
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

  
  const options = {
    settings: {
      autoplaySpeed: 3000,
      boxShadow: '0px 0px 20px #fff',
      disableKeyboardControls: false,
      disablePanzoom: false,
      disableWheelControls: false,
      hideControlsAfter: false,
      lightboxTransitionSpeed: 0.3,
      lightboxTransitionTimingFunction: 'linear',
      overlayColor: 'rgba(185, 7, 230, 0.5)',
      slideAnimationType: 'fade',
      slideSpringValues: [300, 50],
      slideTransitionSpeed: 0.6,
      slideTransitionTimingFunction: 'linear',
      usingPreact: false
    },
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      iconPadding: '10px',
      showAutoplayButton: true,
      showCloseButton: true,
      showDownloadButton: true,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: true,
      size: '40px'
    },
    caption: {
  captionAlignment: 'start',
  captionColor: '#FFFFFF',
  captionContainerPadding: '20px 12% 30px 12%',
  captionFontFamily: 'inherit',
  captionFontSize: 'inherit',
  captionFontStyle: 'inherit',
  captionFontWeight: 'inherit',
  captionTextTransform: 'inherit',
  showCaption: true
    },
    thumbnails: {
      showThumbnails: true,
      thumbnailsAlignment: 'center',
      thumbnailsContainerBackgroundColor: 'transparent',
      thumbnailsContainerPadding: '0',
      thumbnailsGap: '0 1px',
      thumbnailsIconColor: '#ffffff',
      thumbnailsOpacity: 0.4,
      thumbnailsPosition: 'bottom',
      thumbnailsSize: ['100px', '80px']
    },
    progressBar: {
      backgroundColor: '#f2f2f2',
      fillColor: '#000000',
      height: '3px',
      showProgressBar: true
    },
  };


  
  return (
    
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage" />
  
</Helmet>
<Seo
          title={`Best website design for artists, photographers, musicians, clubs/restaurants and other small businesses`}
          description={`Next-gen multimedia video blogs inside the fastest cloud-based web platform`}
          image={'https://vidsock.com/assets/vidsock-promo.jpg'}
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

      {/* <ScrollAnimation className="" animateIn="" delay={4050} initiallyVisible={true} animateOnce={true} animatePreScroll={true} style={{position:'fixed', zIndex:'-1', opacity:'.2', width:'100%'}}> */}


      <div style={{display:'flex', justifyContent:'center', position:'fixed', zIndex:'-1', opacity:'.2', width:'100%'}}>
      <object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{  overflow:'hidden', border:'0px solid red', zIndex:'0', width:'55%', maxWidth:'', height:'55%', background:'transparent'  }} alt="animated content" title="animated content" >You need a new browser</object>
</div>
{/* </ScrollAnimation> */}




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

<section className="" id="" style={{ display:'', height:'', overflow:'', paddingTop:''}}>
  <article>
  <h1 className="title1 " style={{padding:'1rem 10%', color:'#fff', textShadow:'2px 2px 0 #222'}}>Multimedia Web Apps<br /><span style={{fontSize:'68%',}}>Best Website Design Platform</span></h1>


  <h2
            className="title1 "
            style={{fontSize:'', padding:'1rem 10%', color:'#fff', textShadow:'2px 2px 0 #222' }}
          >
            {frontmatter.tagline}
          </h2>

<br />

  <div id="" className="flexbutt" style={{display:'flex', gap:'30px', justifyContent:'', alignItems:'baseline', color:'#fff', textShadow:'1px 1px 0 #000', padding:'0 4%'}}>



        
<div id="" className="flexcheek" style={{ position:'', top:'', order:''}} >
 
 

 <div className="" style={{ background: 'rgba(0,0,0,0.50)', padding:'2rem ',
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


</div>
 

 </div> 






      <div id="" className="flexcheek" style={{order:''}}>
 
 

      <div className="" style={{ background: 'rgba(0,0,0,0.30)', padding:'1rem 2rem ',
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

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000' }}>Launch Your Web App</span>

<br />

Ready To Use = Easy to Learn<br />
Serverless = NO WordPress<br />
Cloud Hosting = Free Forever<br />
<span  className="neonText">Single Price = NO Fees<br />
</span>
<br />
<span style={{color:'', fontSize:'90%'}}>Fast | Flexible | Secure | Features</span>
<br /><br />

{/* <div id="container">
  <div id="flip">
    <div><div>Fastest Websites</div></div>
    <div><div>Server-Less - Save More!</div></div>
    <div><div>Built for SEO</div></div>
  </div>
</div> */}

<span style={{color:'', fontSize:'70%'}}>Get all the details sent to your email:</span>

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





</div>
      







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



<div id="posts" name="posts">
    
<div style={{display:'flex', padding:'1rem 10%', margin:'2rem auto', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignSelf:'center', alignContent:'center', alignItems:'center', maxWidth:'1000px', gap:'20px', background:'rgba(0,0,0,0.30)', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000'}}>
              
     <span style={{fontSize:'3rem', color:'white', transform:'rotate()', lineHeight:'100%'}}>Case Study </span>
              
    <span style={{width:'70%', fontSize:'40px', color:'#fff', lineHeight:'100%'}}>
                VidSocks<br /> in ACTION!
     </span>
 </div>

    <BlogListHome data={posts} />

    <section style={{height:'auto'}}>
<Link to="/posts/" style={{display:'block', width:'100%'}}><article className="post-card" style={{height:'', display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid', padding:'2rem', fontSize:'200%', textAlign:'center' }}>
View More Examples <RiArrowRightSLine style={{fontSize:'50px'}} />
</article></Link>
</section>

</div>
  

   ) : (
  ""
  )}
{/* end show Posts */}








   <div className="zoombox">
      <SRLWrapper options={options} className="">

   <StaticImage
          src="../../static/assets/Experiences-Header-1.jpg"
          alt="Start with the best built website and then make sure it's as fast as can be. Then make some of the most innovative features that nobody else has. Finally, make sure it's virtually hack-proof, easy to use and ready to go!"
          className="item"
          style={{borderRadius:'12', margin:'2rem 4%'}}
        />

<div className="masonry" style={{}}>

<StaticImage
          src="../../static/assets/Experiences-Header-2.jpg"
          alt="Image 2"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../static/assets/Experiences-Header-4.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../static/assets/Experiences-Header-3.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../static/assets/Experiences-Header-4.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../static/assets/Experiences-Header-3.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
</div>
</SRLWrapper>
  </div>











<section className="outer section section--gradient fluff txtshadow" >
      <div className="container" style={{padding: '0 10%', color:'#fff'}}>

{/* <h2>Start with the best built website and then make sure it's as fast as can be. Then make some of the most innovative features that nobody else has. Finally, make sure it's virtually hack-proof, easy to use and ready to go!</h2>

<br />
<p>VidSocks use the industry best cloud-based tools for things like user commenting, analytics, and e-commerce.</p> */}









<div id="costs" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'0 0 2rem 0', width:'100%'}}>
              
              

              <p style={{fontSize:'150%', textAlign:'center', margin:'2rem 0 0 0'}}><u>NO</u> Monthly Costs</p>
              
              <div style={{display:'flex', padding:'1rem 10%', margin:'0 2% 0 2%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'1000px', gap:'20px', background:'rgba(0,0,0,0.30)', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000'}}>
              
                <span style={{fontSize:'3rem', color:'white', transform:'rotate()', lineHeight:'100%'}}>Web Apps </span>
              
                <span style={{width:'70%', fontSize:'40px', color:'var(--primary-color)', lineHeight:'100%'}}>
                OPERATE<br /> FOR FREE
                </span>
              </div>

              <p style={{fontSize:'150%', textAlign:'center', margin:'0 0 0 0'}}>FREE Cloud Based Services</p>

              </div>


{/* <h2 id="costs" className="letter" style={{fontSize:'240%', textAlign:'center'}}>VidSocks Run Free Of Cost</h2>
<p style={{fontSize:'150%', textAlign:'center'}}>VidSocks users have <u>NO</u> monthly costs.

</p>  */}



<div className="flexbutt featurebox" style={{display:'flex', padding:'0', gap:'20px',}}>


<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #291c74', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Cloud Hosting</h3>

<div style={{}}>Virtually all sites operate month-to-month for <strong className="highlight">FREE</strong>. 
  <br />
 Some sites, under heavy usage can incur fees, as outlined by our hosting partner Netlify.<br /> 
 <br />
 <div style={{textDecoration:'underline', textAlign:'center'}}><a href="https://www.netlify.com/pricing/" target="_blank" rel="noreferrer" >View  <strong className="highlight">FREE</strong> Hosting Plan</a></div>
 </div>

</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #612069', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Analytics</h3>
<p>Complete integration with Google Analytics. Simply paste your account tracking code into the CMS settings. 
  <br />
  <br />Track your website performance for <strong className="highlight">FREE</strong>!</p>
</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #291c74', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>E-Commerce</h3>
<p>Complete Shopify API integration with Shopify shopping cart built-in.
Get FULL Shopify functionality directly inside your site.
<br />
   <br />Shopify API costs <strong className="highlight">$8.99mo</strong>.</p>
</div>
</div>











<div className="flexbutt featurebox" style={{display:'flex', marginTop:'20px', padding:'', gap:'20px'}}>


<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #612069', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Social Sharing</h3>
<p>Why pay for plugins just to allow for your users to share your content? Social sharing is built-in, along with other great features. <br /><br />All INCLUDED for <strong className="highlight">FREE</strong>.</p>
</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #291c74', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>AdFree YouTube</h3>
<p>We use AdFree YouTube to remove ads. This means you have complete control of your videos without any ads.
  
  <br /><br />AdFree YouTube <strong className="highlight">FREE!</strong></p>
</div>

{/* <div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.30)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">NFT Features</h3>
<p>Setup countdown timers for your own NFT Drops!  <br /> Embed your Foundation or OpenSea into your posts. Just copy and paste the share code.</p>
</div> */}
<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #612069', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Comments</h3>
<p>We use CommentBox.io and with their generous 100 comments a month.
  
  <br /><br /><strong className="highlight" style={{color:''}}>FREE!</strong> Comments without ads</p>
</div>


</div>



      </div>
</section>





{/* <SparkyIntro /> */}

{/* <div className="spacer66"></div> */}
<div id="features" className="">
<div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', alignItems:'baseline', gap:'30px', color:'#fff'}}>



  <div className="flexcheek" >
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px', textAlign:'left'}}>
        
      <h2
  className="title1 txtshadow-header"
  style={{
   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000' }}>VidSocks include:</span></h2>
          
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
      </div>
    </div>
  </div>





  <div className="flexcheek">
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px'}}>
        {/* <h2 className="vartext txtshadow">VidSocks Features:</h2> */}
        <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000' }}>VidSocks Features:</span></h2>

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
      </div>
    </div>
  </div>

  



  <div className="flexcheek">
    <div className="frontcontent content-lr">
    
      <div className="content-inside" style={{padding:'8px'}}>
        

        <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000' }}>More Features:</span></h2>


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
      </div>
    </div>
  </div>
  
</div>
</div>

{/* <SparkyIntro /> */}
{/* <div className="spacer66"></div> */}


</div>









<SRLWrapper options={options}>

<div style={{padding:'2rem 4%'}}>
   <StaticImage
          src="../../static/assets/Experiences-Header-7.jpg"
          alt="Start with the best built website and then make sure it's as fast as can be. Then make some of the most innovative features that nobody else has. Finally, make sure it's virtually hack-proof, easy to use and ready to go!"
          className="item"
          style={{borderRadius:'12px'}}
        />
</div>
<div className="masonry">

<StaticImage
          src="../../static/assets/Experiences-Header-2.jpg"
          alt="Image 2"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../static/assets/Experiences-Header-4.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../static/assets/Experiences-Header-3.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../static/assets/Experiences-Header-4.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../static/assets/Experiences-Header-3.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
</div>
</SRLWrapper>








{/* <div className="container txtshadow has-app" style={{ maxWidth:'1024px', textAlign:'', alignSelf:'', color:'#fff' }}>

<SupportBox />
</div> */}
<br />

{/* <div className="spacer66"></div> */}
{/* <SparkyIntro /> */}

<div id="cms" className="container " style={{padding:'0 8%', maxWidth:'1024px', margin:'0 auto', color:'#fff'}}>
<section style={{ display:'',}}>
  <article>

  <div style={{display:'flex', flexDirection:'column', padding:'1rem 3%', margin:'0 2% 0 2%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'1000px', gap:'20px', background:'rgba(0,0,0,0.30)', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000'}}>

  <h2 className="letter txtshadow" id="options" style={{fontSize:'200%', textAlign:'center'}}>Using VidSocks </h2>

<p className="txtshadow" style={{fontSize:'150%', textAlign:'center'}}><br />Add Content<br /> Easy As <br />Filling A Form </p>
  {/* <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}> */}

</div>
  </article>

  </section>
</div>








<div className='player-wrapper' style={{position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', margin:'0 4%', borderRadius:'12px' }}>


<ReactPlayer
          className='react-player'
          url="https://www.youtube.com/embed/NPzXWpNKScY?controls=0&amp;showinfo=0&amp;rel=0&amp;autoPlay=1&amp;loop=1&amp;mute=1&amp;playlist=NPzXWpNKScY"
          width="100%"
          height="100%"
     
     style={{ background: 'rgba(0,0,0,0.30)'}}
          autoPlay={false}
          // background={true}
          loop
          playing
          playsinline
          muted={true}
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


{/* <div className="spacer66"></div> */}
{/* <SparkyIntro /> */}




<br /><br />

<div className="container txtshadow " style={{padding:'0 8%', maxWidth:'1024px', margin:'0 auto',}}>
<section style={{ display:'', color:'#fff'}}>
  
<div style={{display:'flex', padding:'1rem 10%', margin:'0 2% 0 2%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'1000px', gap:'20px', background:'rgba(0,0,0,0.30)', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000'}}>

<h2 className="headline" style={{fontSize:'220%', textAlign:'center', textShadow:'0 2px 2px #000'}}>Got Questions?
<br />
{/* <span style={{fontSize:'80%',}}>Pay ONCE + FREE to operate</span><br />  */}
<span style={{fontSize:'80%', textAlign:'center', textShadow:'0 2px 2px #000'}}>We've Got Answers</span>
</h2>
</div>
</section>
</div>


<div className="container txtshadow " style={{ maxWidth:'1024px', textAlign:'', alignSelf:'', color:'#fff', padding:'0 4%', margin:'0 auto', }}>

<NFTDetails />
</div>






<div className="container txtshadow " style={{padding:'0 8%', maxWidth:'1024px'}}>
<section id="buy" style={{ display:'', color:'#fff'}}>

<div id="buy" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'0 0 0 0', width:'100%'}}>
              
              

              <p style={{fontSize:'150%', textAlign:'center', margin:'2rem 0 0 0'}}>VidSocks users have <u>NO</u> monthly costs</p>
              
              <div style={{display:'flex', padding:'1rem 10%', margin:'0 2% 0 2%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'1000px', gap:'20px', background:'rgba(0,0,0,0.30)', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000'}}>
              <h2 className="headline" style={{fontSize:'220%', textAlign:'center', textShadow:'0 2px 2px #000'}}>Fastest Websites<br />More Features<br />One-Time Cost
<br /><br />
<span style={{fontSize:'70%',}}>Pay ONCE + FREE to Operate<br /> <span  className="highlight">No Hidden Costs</span>.</span>
</h2>

                </div>


</div>
  

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
    
      <div className="content-inside" style={{padding:'8px',textAlign:'center', color:'#fff'}}>
        <h2 className="vartext txtshadow letter" style={{fontSize:'200%', border:'3px solid #fff', borderRadius:'12px', background: 'rgba(0,0,0,10)',}}>VidSocks - Pro</h2>

        <ul className="featurelist" style={{listStyleType:'none'}}>




        <li>Includes 2 hrs of Unique Customizations
          <br />
    
          {/* <span style={{color:'#37f011'}}>Recommended:</span> */}
          <br />
          <a href="https://secure3.myshopify.com/cart/41327989391520:1?channel=buy_button" target="_blank" rel="noreferrer" className="button fire noext" style={{border:'1px solid hotpink'}}>Pro ($499)</a>

          <br />
          <br />
        </li>
        <li className="fluff">Includes 1 hour of Video Resources</li>
        <li className="fluff">Advanced audio/video control start.stop times.</li>
        <li className="fluff">AdFree YouTube Portal - watch videos with No ADs!</li>
        <li className="fluff">Advanced Content Management System</li>
        <li className="fluff">Full Updates - All new features included</li>



</ul>
      </div>
    </div>
  </div>

  <div className="flexcheek">
    <div className="frontcontent content-lr">
    
      <div className="content-inside" style={{padding:'8px',textAlign:'center', color:'#fff'}}>
      <h2 className="vartext txtshadow letter" style={{fontSize:'200%', border:'3px solid #fff', borderRadius:'12px', background: 'rgba(0,0,0,10)',}}>VidSocks - E-Com</h2>
        <ul className="featurelist" style={{listStyleType:'none', borderRadius:'52px'}}>
        

        <li>Includes 4 hrs of Unique Customizations

          <br />
          <br />
          <a href="https://secure3.myshopify.com/cart/41328406036640:1?channel=buy_button" target="_blank" rel="noreferrer" className="button fire noext" style={{border:'1px solid hotpink'}}>E-Com ($899)</a>

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
      </div>
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