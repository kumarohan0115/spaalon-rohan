import React from 'react'
import Carousel from "react-elastic-carousel";

const Trending = () => {
    const data = [{
        img: "https://spaalon.com/images/serviceImg.png",
        text: "Hair Texture"
    },
    {
        img: "https://spaalon.com/images/serviceImg.png",
        text: "By Concern"
    },
    {
        img: "https://spaalon.com/images/serviceImg.png",
        text: "Hair Color"
    },
    {
        img: "https://spaalon.com/images/serviceImg.png",
        text: "Hair Spa"
    },
    {
        img: "https://spaalon.com/images/serviceImg.png",
        text: "Waxing"
    },
    {
        img: "https://spaalon.com/images/serviceImg.png",
        text: "Spa"
    },
    {
        img: "https://spaalon.com/images/serviceImg.png",
        text: "Nails"
    }, {
        img: "https://spaalon.com/images/serviceImg.png",
        text: "Face Masage"
    },
    ]

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];


    const slide_div = {
        display: "flex",
        padding: "100px 50px 10px 50px",
        flexWrap: "wrap",
        justifyContent:'center',
        textAlign:'center',
        backgroundColor:'white'
    }
    const slide_tiles = {
        maxWidth: "25%",
        minWidth: "200px",
        backgroundColor: "white",
        padding: "1rem 2rem",
        textAlign: "center",
        margin: "10px",
        borderRadius: "5px",
        boxShadow:'1px 1px 5px gray'
    }

    const img_style = {
        width: "100%",
        objectFit: "cover"
    }

    return (
        <div style={slide_div}>
            
            <div>
                <h1>What's Trending</h1>
                <h4>Let's not wait for the "Perfect Look"</h4>
            </div>
            <Carousel breakPoints={breakPoints}>
                {data.map((ele, i) =>
                    <div key={i} style={slide_tiles}>
                        <img
                            src={ele.img}
                            style={img_style}
                            alt="a" />
                        <h5>{ele.text}</h5>
                    </div>
                )}
            </Carousel>

        </div>
    )
}

export default Trending