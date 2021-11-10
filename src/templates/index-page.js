/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
// import { GoArrowDown } from "react-icons/go"
import ScrollAnimation from 'react-animate-on-scroll'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
// import { ImPlay } from "react-icons/im"
import styled from "styled-components"
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
{/* <Seo
          title={`VidSock - Video Multimedia NFT Platform`}
          description={`Create, display and market your NFTs with VidSock`}
          image={'https://vidsock.com/default-og-image.jpg'}
        /> */}
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
  //       image={photoUrl}
  //  photoUrl

   image={ siteUrl + getSrc(frontmatter.featuredImage) }

      />
      
      




        <div name="container21" className="container21" style={{height:'',}}>


{/* show feature */}
        {ShowFeature ? (
            
       
          


        
<section style={{ display:'',}}>
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
            
       


<section style={{ display:'', height:'', overflow:''}}>
  <article>
  <h1 className="title1" style={{padding:'1rem 10%', color:'#fff', textShadow:'2px 2px 0 #222', lineHeight:'2.5rem'}}>VidSocks Multimedia Platform<br /><span style={{fontSize:'80%',}}>{frontmatter.title}</span></h1>
  <h2
            className="tagline1"
            style={{padding:'1rem 10% 2rem 10%', color:'#fff', textShadow:'1px 1px 0 #000'}}
          >
            {frontmatter.tagline}
          </h2>
  <div className="flexbutt" style={{display:'flex', gap:'30px', justifyContent:'center', alignItems:'center', color:'#fff', textShadow:'1px 1px 0 #000', padding:'0 4%'}}>



        
<div className="flexcheek" >
 
 

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

</ScrollAnimation>
 







 </div> 


      <div className="flexcheek" style={{height:'', minHeight:'', display:'', justifyContent:'', width:'', position:'sticky', top:'0'}}>
 
 

      <ScrollAnimation className="" animateIn="bounceInUp" delay={250} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{ background: 'rgba(0,0,0,0.30)', padding:'2rem ',
          backdropFilter: 'blur(4px)', border:'3px solid #fff', borderRadius:'12px', textAlign:'', alignSelf:'', }}>


   

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

<span style={{fontSize:'140%'}}>Launch Your Site Today</span><br />
Easy to use - No Coding<br />
Fast Sites - No WordPress<br />
Free Hosting - No Costs<sup style={{fontSize:'60%', lineHeight:'70%'}}>*</sup>
<br /><br />
</h2>
<Link
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

            
          </Link>
          <br /><br /> 
          <div style={{fontSize:'70%', textAlign:'center'}}>* Virtually all sites operate month-to-month with no fees or costs. Some sites, under heavy usage can incur fees, as outlined by our hosting partner Netlify. You can view more information here.</div>





</ScrollAnimation>
      







      </div> 
</div>
</article>
</section>


) : (
  ""
)}
{/* end show Info */}


{/* end show Posts */}
{ShowPosts ? (

<div id="posts" name="posts">
        <BlogListHome data={posts} />

        <section style={{height:'auto'}}>
  <Link to="/posts/2/" style={{display:'block', width:'100%'}}><article className="post-card" style={{height:'50%', display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid', padding:'2rem', fontSize:'200%', textAlign:'center' }}>
    View More <RiArrowRightSLine style={{fontSize:'50px'}} />
    </article></Link>
    </section>

   </div>

  

   ) : (
    ""
  )}
{/* end show Posts */}


 </div>{/* end scooch */}

      
      




    </Layout>
    </CustomBox>
  )
}

export default HomePage