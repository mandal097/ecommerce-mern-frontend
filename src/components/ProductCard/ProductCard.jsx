import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import { HeartFilled, QqOutlined, StarFilled } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { capitalizeFirstLetter } from '../../helpers/strings';

const ProductCard = ({ product, width, padding }) => {
    const navigate = useNavigate();
    const [added, setAdded] = useState(false);
    const handleWishlist = (e) => {
        e.stopPropagation()
        switch (added) {
            case false:
                setAdded(true);
                toast.success('Added to wishlist')
                break;
            case true:
                setAdded(false);
                toast.error('Removed from wishlist')
                break;
            default:
                setAdded(false)
        }
    }
    return (
        <>
            <ToastContainer className='toaster' />
            <div className={styles.product_card} style={{ width: width, padding: padding }}>
                <div className={styles.wrapper}>
                    <div className={styles.img} onClick={() => navigate(`/product/kuch-bhi-lele-yaha-se`)}>
                        <div className={`${styles.wishlist} ${added && 'pop'}`} onClick={handleWishlist} >
                            <HeartFilled className={`${styles.icon} ${added && styles.added} `} />
                        </div>
                        <img src={product?.img} alt='product_image' />
                    </div>

                    <div className={styles.details}>
                        <Link
                            to={`/product/kuch-bhi-filhal-haha`}
                            className={styles.name}>{product?.p_name}</Link>
                        <div className={styles.ratings}>
                            <div className={styles.stars}>
                                <span>{product?.ratings}</span>
                                <StarFilled className={styles.icon} />
                            </div>
                            <small className={styles.counts}>{'(23,343)'}</small>
                            <div className={styles.logo}>
                                <QqOutlined className={styles.icon} />
                            </div>
                        </div>
                        <div className={styles.prices}>
                            <span>₹{product?.selling_price}</span>
                            <strike>₹{product?.mrp}</strike>
                            <small>58% off</small>
                        </div>
                        <div className={styles.btns}>
                            <button onClick={() => navigate(`/product/kuch-bhi-lele-yaha-se`)}>Add to cart</button>
                            <button>Buy now</button>
                        </div>
                        <div className={styles.delivery_stat}><span>{capitalizeFirstLetter("free delivery")}</span></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCard