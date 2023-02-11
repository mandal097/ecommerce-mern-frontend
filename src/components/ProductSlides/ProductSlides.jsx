import React from 'react';
import styles from './ProductSlides.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons'
import ProductCard from '../ProductCard/ProductCard';
import { data } from '../ProductList/data';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={styles.right_arrow}
            onClick={onClick}
        >
            <RightOutlined className={styles.icon} /></div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={styles.left_arrow}
            onClick={onClick}
        >
            <LeftOutlined className={styles.icon} />
        </div>
    );
}


const ProductSlides = ({ heading }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className={styles.product_slides} >
            <h2> {heading} </h2>
            <Slider {...settings} className={styles.slider}>
                {
                    data?.map(product => (
                        <div className={styles.slides} key={product.id}>
                            <ProductCard product={product} width='100%' padding='0rem 0 1rem 0' />
                        </div>
                    ))
                }
            </Slider>
        </div >
    );
}



export default ProductSlides