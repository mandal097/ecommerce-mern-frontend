import React, { useState, useEffect } from 'react';
import Categories from '../../components/Categories/Categories';
import styles from './ProductPage.module.scss';
import {
    InfoCircleOutlined,
    QqOutlined,
    ShoppingCartOutlined,
    StarFilled,
    TagFilled,
    ThunderboltOutlined
} from '@ant-design/icons';
import PriceInfo from '../../components/PriceInfo/PriceInfo';
import Ratings from '../../components/Ratings/Ratings';
import ProductSlides from '../../components/ProductSlides/ProductSlides';
import { useLocation } from 'react-router-dom';
import { data } from '../../dummydata/data';
import { percentage } from '../../helpers/calPercentage';




const ProductPage = () => {
    const [product, setProduct] = useState({});
    const loacation = useLocation();
    const productId = loacation.pathname.split('/')[2];
    

    useEffect(() => {
        const details = data.find(d => d.id === Number(productId));
        setProduct(details)
    }, [productId])


    return (
        <div className={`${styles.product_page}`}>
            <Categories type='categories_page' />
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.img_}>
                        <div className={styles.img_picker}>
                            <div className={styles.img_pick}>
                                <img src={product?.img} alt="product" />
                            </div>
                            <div className={styles.img_pick}>
                                <img src={product?.img} alt="product" />
                            </div>
                        </div>
                        <div className={styles.current_image}>
                            <img src={product?.img} alt="product" />
                        </div>
                    </div>
                    <div className={styles.btns}>
                        <button><ShoppingCartOutlined className={styles.icon} /> ADD TO CART</button>
                        <button><ThunderboltOutlined className={styles.icon} /> BUY NOW</button>
                    </div>
                </div>

                <div className={styles.right}>
                    <h1>{product?.p_name}</h1>

                    <div className={styles.ratings}>
                        <div className={styles.stars}>
                            <span>{product?.ratings}</span>
                            <StarFilled className={styles.icon} />
                        </div>
                        <small className={styles.counts}>9,995 ratings and 508 reviews</small>
                        <div className={styles.logo}>
                            <QqOutlined className={styles.icon} />
                        </div>
                    </div>

                    <div className={styles.prices}>
                        <span>₹ {product?.selling_price}</span>
                        <strike>₹ {product?.mrp}</strike>
                        <small>{percentage(product)}% off</small>
                        <div className={styles.show_price_details}>
                            <InfoCircleOutlined className={styles.icon} />
                            <div className={styles.priceInfo}>
                                <PriceInfo product={product}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.offers}>
                        <b>Available offers</b>
                        <div className={styles.offer}>
                            <TagFilled className={styles.icon} />
                            <p>Buy this Product and Get Extra ₹500 Off on Two-Wheelers</p>
                        </div>
                        <div className={styles.offer}>
                            <TagFilled className={styles.icon} />
                            <p>Bank Offer5% Cashback on Flipkart Axis Bank Card</p>
                        </div>
                        <div className={styles.offer}>
                            <TagFilled className={styles.icon} />
                            <p>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999</p>
                        </div>
                    </div>

                    <div className={styles.product_detail}>
                        <p>Size : </p>
                        <div className={styles.size_select}>
                            <label>M</label>
                            <input type="radio" name="size" id="size" />
                        </div>
                        <div className={styles.size_select}>
                            <label>S</label>
                            <input type="radio" name="size" id="size" />
                        </div>
                        <div className={styles.size_select}>
                            <label>L</label>
                            <input type="radio" name="size" id="size" />
                        </div>
                        <div className={styles.size_select}>
                            <label>XL</label>
                            <input type="radio" name="size" id="size" />
                        </div>
                        <div className={styles.size_select}>
                            <label>XXL</label>
                            <input type="radio" name="size" id="size" />
                        </div>
                    </div>

                    <div className={styles.pincode_check_}>
                        <div className={styles.head}>Delivery</div>
                        <div className={styles.pincode_wrap}>
                            <div className={styles.icon}>
                                <img src="/assets/images/gmap.png" alt="" />
                            </div>
                            {/* <SearchOutlined className={styles.icon} /> */}
                            <input type="text" placeholder='Enter your pincode to check' />
                            <button>Check</button>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <div className={styles.head}>Description</div>
                        <div className={styles.description_wrap}>
                            <p>If truly wireless is your vibe, the realme TechLife Buds T100 are sure to be your new best buds! The 10mm dynamic bass driver and Dirac technology ensures an immersive sound experience across all genres. With 28 hours total playback, you can keep your buds going for the long haul. You can even take crystal clear calls thanks to its AI ENC technology. The realme TechLife Buds T100 also have low latency of 88 ms and Bluetooth 5.3 compatibility, and many more amazing features, making them perfect for any activity.</p>
                        </div>
                    </div>

                    <div className={styles.specifications}>
                        <div className={styles.top}>
                            <b>Specifications</b>
                        </div>
                        <div className={styles.bottom_}>
                            <span>General</span>
                            <div className={styles.fields}>
                                <p className={styles.key}> Model Name</p>
                                <p className={styles.value}>TechLife Buds T100</p>
                            </div>
                            <div className={styles.fields}>
                                <p className={styles.key}> Model Name</p>
                                <p className={styles.value}>TechLife Buds T100</p>
                            </div>
                            <div className={styles.fields}>
                                <p className={styles.key}>Sales Package</p>
                                <p className={styles.value}>1 Pair of Earbuds with Charging Case, Charging Cable, Eartips, User Guide</p>
                            </div>
                            <div className={styles.fields}>
                                <p className={styles.key}>Sales Package</p>
                                <p className={styles.value}>1 Pair of Earbuds with Charging Case, Charging Cable, Eartips, User Guide</p>
                            </div>
                            <div className={styles.fields}>
                                <p className={styles.key}> Model Name</p>
                                <p className={styles.value}>TechLife Buds T100</p>
                            </div>
                            <div className={styles.fields}>
                                <p className={styles.key}>Sales Package</p>
                                <p className={styles.value}>1 Pair of Earbuds with Charging Case, Charging Cable, Eartips, User Guide</p>
                            </div>
                        </div>
                    </div>

                    <Ratings />

                </div>
            </div>
            <div className={styles.bottom}>
                <ProductSlides heading='Similar products' />
            </div>
        </div>
    )
}

export default ProductPage