import React, { useState,useEffect } from 'react'
import axios from "axios";
import './popular.css'

const PopularSpa = () => {
    const [data ,setData] = useState()
    useEffect(()=>{
        axios
        .get("https://spaalon.harij.in/api/shop/PopularShop")
        .then((res) => {
          setData(res.data.popularShop);
        })
        .catch((err) => console.log(err));
    },[])


  return (
    <section id='mainpopular'>

    <div className='sectionSty'>
        <div className="heading">
            <h1>Popular Spa & Salon</h1>
            <h4>We want you to look Fabulous</h4>
        </div>

        <div className='imgcontainer' id='this'>
            {data?.map((item, i) =>
            <>
                <div key={i} id={item.id} className='imgDiv'>
                    <img
                        src={item.image_url}
                        className='imgcss'
                        alt="a" />
                    <h5>{item.shop_name}</h5>
                </div>
                {data[i+1]?<div style={{maxHeight:"100%" ,borderLeft:"1px solid black"}}>

                </div>:""}
            </>
                
            
            )}
        </div>
    </div>
    </section>
  )
}

export default PopularSpa