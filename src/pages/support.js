/** @jsx jsx */
import { jsx } from "theme-ui"

// import * as React from "react"
import { Layout } from "../components/layout"
import { RiSendPlane2Line } from "react-icons/ri"
import SupportBox from "../components/supportbox.js"
// import { Footer } from "../components/footer"
// import { Link } from "gatsby"

// import { StaticImage } from "gatsby-plugin-image"









const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
  },
}

export default function SupportPage() {
   return (


    
    <Layout className="contact-page" sx={contactStyles.contactPage}>


 
    <br />

    <div className="container txtshadow" style={{ maxWidth:'1024px',
           textAlign:'', alignSelf:'', color:'#fff' }}>

<SupportBox />
</div>


    <div className="container" style={{padding:'2rem 12% 0 12%'}}>
       
    <h1 className="title" style={{fontSize:'40px', textAlign:'center'}}>VidSocks Support Form</h1>

    
    <div className="content">
    
    {/* <p>Thank you so much for your purchase. You are helping to support an individual artist and encouraging me to keep shooting. People like you make that possible – Thank You!</p> */}

    
    
  

  
     {/* <p>IMPORTANT NOTE: Please fill in accurate information (especially the email address) as this will be used to activate your new account on VidSock.com and will be used for your login credentials. So you will need access to the email account that you provide. <br />You can find the Redeem Code in the unlocakable content on the NFT on OpenSea.</p> */}

     {/* <p style={{textAlign:'center'}}><Link className="button" to="/contact/" state={{modal: true}} >Contact</Link></p> */}



       </div>
    
       </div>


       <div className="wrapper" style={{padding:'0 8%'}}>
        <form
          className="contact-form"
          action="/thanks"
          name="support"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="support" />
          <p>
            <label>
              <input type="text" name="name" placeholder="Name" required />
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
          </p>
          <p>
            <label>
              <input type="text" name="supportcode" placeholder="Support Code (if you have one)" required />
            </label>
          </p>

          <p>
          {/* <label htmlFor="attachment" style={{padding: '0', margin: '0', color:'inherit'}}>Upload Logo - (vector .svg or transparent .png is best)</label> */}

          <label htmlFor="attachment" style={{padding: '0', margin: '0', color:'inherit'}}></label>

                    {/* <div className="upload" style={{ border: '0px solid', padding: '12px', borderRadius: '5px', boxShadow: '0px 0px 1px 1px #999', color: '#999',}}> */}
                    {/* <label htmlFor="attachment" style={{padding: '0', margin: '0 2.5% 0 0', float: 'left', width: '58%', color: '#333',}}>
                    ZIP files preferred */}
                    <input
                        className="file-input hidden"
                        type="file"
                        id="attachment"
                        name="attachment"
          
                      />
                      {/* </label> */}
                      {/* </div> */}
                      </p>
          <p>
            <label>
              <textarea name="message" placeholder="Your comments" required></textarea>
            </label>
          </p>
          <p className="text-align-right" style={{marginRight:'60px', color:'#fff'}}>
            <button
              className="button"
              
              type="submit"
            >
              Send Message{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
      </div>
      <br />
      <br /><br />
      {/* <Footer /> */}
    </Layout>

  )
}
