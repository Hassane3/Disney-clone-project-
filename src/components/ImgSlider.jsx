import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg" alt="poster" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg" alt="poster" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scale.jpg" alt="poster" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg" alt="poster" />
                </a>
            </Wrap>


        </Carousel>
    )
}

const Carousel = styled(Slider)`
    margin-top: 60px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity:1;
            transition: opacity 0.2s ease 0;
            
        }
    }
    ul li button {
        &:before {
            font-size : 10px;
            color: rgb(150, 158, 171)
        }
    }

    .slick-dots li.slick-active button:before {
        color: #fff;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -40px;
    }
    .slick-next {
        right: -40px;
    }
`

const Wrap = styled.div`
    border-radius: 4px;
    position: relative;

    a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
    
        img {
            width: 100%;
            height: 100%;
            
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249,249,249,0.8); 
            transition: 200ms;
        }
    }
`
export default ImgSlider