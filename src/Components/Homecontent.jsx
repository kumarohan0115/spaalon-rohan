import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Homecontent.css'
const Homecontent = () => {

  return (
    <div className='homebackdrop'>
        <div className='centerData'>
            <div>
                <h1>Discover & Book</h1>
                <h3>Looking for Best Spa & Salon Near you ?</h3>
            </div>
            <div className='searchboxDiv'>
                <div className='inputholder'>
                    <input type="text" className='inputs form-control' placeholder='What are you looking for'/><SearchIcon style={{color: 'black'}}/>
                </div>
                <div className='inputholder'>
                    <input type="text" className='inputs form-control' placeholder='Enter Your Location' /><LocationOnIcon style={{color: 'black'}}/><button className='btn btn-md searchbtn'>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homecontent