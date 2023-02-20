import React, { useEffect, useState } from 'react'
import axios from "axios"
import './BestDeal.css'

const BestDeal = () => {

    const [data, setData] = useState()
    useEffect(() => {
        axios
            .get("https://spaalon.harij.in/api/shop/ShopBestDeal")
            .then((res) => {
                setData(res.data.bestshop);
            })
            .catch((err) => console.log(err));
    }, [])


    return (
        <div className='bestDealContainer'>
            <div className="bestDeal">
                <h1>Best Deals</h1>
                <h5>Come experience the best haircut and color services</h5>
            </div>
            <div className='bestDealContent'>
                {
                    data?.map((items, i) =>
                        <div key={i} className='cardstyle'>
                            <img className='imgStyle' src={items.image_url} alt={items.shop_name} />
                            <div className='infostyle'>
                                <h5 style={{ color: 'black', fontWeight: '700' }}>{items.shop_name}</h5>
                                <p style={{ color: 'gray', fontWeight: '500' }}>Best salon to make you look real you !!</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default BestDeal