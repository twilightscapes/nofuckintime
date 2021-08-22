/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
// import { FaHandPointDown } from "react-icons/fa"
// import ScrollAnimation from 'react-animate-on-scroll'
// import { StaticImage } from "gatsby-plugin-image"

import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine} from "react-icons/ri"


import PostCard from "../components/post-card"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"







const styles = {
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
      },
    },
  },
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`
const Pagination = props => (
  <div className="pagination" sx={styles.pagination}>
    <ul>
      {!props.isFirst && (
        <li>
          <Link to={props.prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>{" "}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`${props.blogSlug}${i === 0 ? "" : i + 1}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage} rel="next">
            Next{" "}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = "/archive/"
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
    const nextPage = blogSlug + (currentPage + 1).toString()

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
    let props = {
      isFirst,
      prevPage,
      numPages,
      blogSlug,
      currentPage,
      isLast,
      nextPage,
    }

    return (
      <Layout className="blog-page1">
<Helmet>
  <body className="bloglist" />
</Helmet>
        <Seo
          title={"NFT Archive — Page " + currentPage + " of " + numPages}
          description={
            "NFT Archive page " + currentPage + " of " + numPages
          }
        />
        


        


    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        padding:'0 4vw',
        clear:'both'
      }}
    >
<h1 className="headline" style={{fontSize:'18px'}}>No Fuckin Time</h1>

    
    
 <div className="home-posts grids col-1 sm-2 lg-3" style={{clear:'both', textAlign:'left'}}>
 {posts}
 </div>
        <Pagination {...props} />


        

</div>


{/* <h3 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>Promt text here</h3>

<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation> */}
 <br /><br />
      </Layout>
    )
  }
}

export default BlogIndex
