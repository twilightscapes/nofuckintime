
import * as React from "react"


// import { BiLeftArrow } from "react-icons/bi"
import { navigate, Link } from "gatsby";




   
const Menu = () => (










 
<>
 <li className="carto no-app" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/contact/">
Contact
</Link>
</li>

      <li className="carto" style={{textAlign:'center', paddingTop:'1rem'}}>
              <Link title="VidSocks Examples" className="navbar-item txtshadow neonText" to="/posts/">
                VIEW EXAMPLES
              </Link>
      </li>

 
      <li className="carta">
      <div style={{display:'flex', justifyContent:'center'}}>
<button className="back" onClick={()=>navigate(-1)} style={{padding:'4px 8px', borderRadius:'12px'}}>
        {" "} Continue Choosing 
</button>
</div>
      </li>
</>
  

  
)

export default Menu