import React from "react"
import { graphql } from "gatsby"

import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
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









<div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', gap:'30px'}}>
  <div className="flexcheek" >
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px', textAlign:'left'}}>
        <h2>All VidSocks are:</h2>
          
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
        

<li>SEO Optimized</li>

<li>Social media icons</li>

<li>OpenGraph structured data</li>

<li>Twitter Cards meta</li>

<li>XML Sitemaps</li>

<li>Contact Form</li>

<li>E-Newsletter Form</li>
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


<div className="spacer33"></div>




      {/* <GoBack /> */}
      <br />
      <br />
    </Layout>


  )
}

export default AboutPage
