import React,{useState,useEffect} from 'react'
import './navbar.css'
import LoginIcon from "@mui/icons-material/Login";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Drawer from "./DrawerComponent"
const Navbar = () => {

  const [isMenuIcon,setMenuIcon] = useState()
  useEffect(()=>{
    if(window.innerWidth<800){
      console.log("resize")
      setMenuIcon(true)
    }else{
      setMenuIcon(false)
    }
  },[])
  window.addEventListener("resize",()=>{
    
    if(window.innerWidth<800){
      console.log("resize")
      setMenuIcon(true)
    }else{
      setMenuIcon(false)
    }
  })
  return (
    <div className='navBar'>
        <div className="logo">
            <img src="https://spaalon.com/images/SpaalonLogoRed.jpg" alt="logo" />
        </div>
        <div className="Navitems">
        <ul>
            {isMenuIcon ? (
          <Drawer />
        ) : (
         
            <>
                <li><a href="/"> Hair</a></li>
                <li><a href="/"> Body</a></li>
                <li><a href="/"> Spa</a></li>
                <li><a href="/"> Nail</a></li>
                <li><a href="/"> Face</a></li>
                
                </>
        )}
        <li><a href="/"><LoginIcon/></a></li>
                <li><a href="/"><LocalMallIcon/></a></li>
         </ul>
         </div>
    </div>
  )
}

export default Navbar