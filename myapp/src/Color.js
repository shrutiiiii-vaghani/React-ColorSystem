import { useState } from "react";

  const Color = () => {
    const[color,setColor]=useState("")
    return(
       <div align="center">
         <div className="w-12" style={{backgroundColor:color,height:"100vh"}}>
            <input type="text" placeholder="Enter a color name" value={color} onChange={(e)=>setColor(e.target.value)} style={{padding:"10px 15px",fontSize:"15px",marginTop:"20px"}}/>
         </div>
       </div>
    )
  }



export default Color;