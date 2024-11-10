import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./Banner.css";

const data = [
    "/src/assets/Slider/C1.jpg",
    "/src/assets/Slider/C2.jpg",
    "/src/assets/Slider/C3.jpg",
    "/src/assets/Slider/C4.jpg",
    "/src/assets/Slider/C5.jpg",
    "/src/assets/Slider/C6.jpg",
    "/src/assets/Slider/C7.jpg",
    "/src/assets/Slider/C8.jpg"
]

// console.log(data);

const Banner = () => {
    return (
        <>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

            </Carousel>
        </>
    )
}

export default Banner;