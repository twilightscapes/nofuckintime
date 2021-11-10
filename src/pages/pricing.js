import React from "react"
import { Link } from "gatsby"
import { RiCheckboxCircleLine } from "react-icons/ri"
import Pricing from "../components/pricing"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import { BiBorderRadius } from "react-icons/bi"
import { Helmet } from "react-helmet"

const Thanks = () => (
  <Layout>
     <Helmet>
  <body className="pricing" />
  
</Helmet>
    <Seo title="Pricing Options" />

{/* <div className="spacer33"></div>  */}




<Pricing />








    <div className="spacer33"></div> 
    {/* <div className="spacer66"></div>  */}
  </Layout>
)

export default Thanks
