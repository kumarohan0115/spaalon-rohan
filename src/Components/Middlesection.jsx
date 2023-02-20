import React from 'react'
import './Homecontent.css'

const Middlesection = () => {
  return (
    <div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'-70px',zIndex:'99'}} id='items' >
            <div className='homeitem'>
                <div className='homeitems'>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" alt="" />
                    <p>Salon for Women</p>
                </div>
                <div className='homeitems'>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png" alt="" />
                    <p>Hair, Skin & Nails</p>
                </div>
                <div className='homeitems'>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" alt="" />
                    <p>Women's Therapies</p>
                </div>
                <div className='homeitems'>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" alt="" />
                    <p>Salon For Men's</p>
                </div>
                <div className='homeitems'>
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" alt="" />
                    <p>Men's Therapies</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Middlesection