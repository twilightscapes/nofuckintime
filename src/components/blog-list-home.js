/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"


import PostCard from "./post-card"


export default function BlogListHome(props) {
  const data = props.data
  const posts = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={posts} />
}

const PostMaker = ({ data }) => (
<div>





{/* <h2 style={{fontSize:'200%', marginBottom:'1rem'}}>
      Latest <strong>Experiences</strong>{" "}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2> */}
    
    <div className="container2" style={{display:'', justifySelf:'center', width:'100vw', maxWidth:'100%', maxHeight:'70vh', border:'0px solid #000 !important', margin:'0',transition:'background 0.3s ease-in'}}>

        



{data}

 
</div>

    

  {/* <div style={{display:'flex', justifyContent:'center', marginBottom:'20vh'}}>
  <Link
      className="button"
      to="/experiences/"
      title="See More Galleries"
      style={{color:'#fff'}}
    >
      See More Experiences?
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
</div> */}

</div>
)
