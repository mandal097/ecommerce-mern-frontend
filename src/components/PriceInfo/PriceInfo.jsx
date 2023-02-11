import React from 'react';
import styles from './PriceInfo.module.scss';
import {percentage} from '../../helpers/calPercentage';

const PriceInfo = ({ product, perc }) => {


    return (
        <div className={styles.price_info}>
            <b>Prices</b>
            <div className={styles.prices}>
                <p>Maximum Retail Price</p>
                <strike>₹ {product?.mrp}</strike>
            </div>
            <div className={styles.prices}>
                <p>Selling Price</p>
                <strike>₹ {product?.selling_price}</strike>
            </div>
            <div className={styles.prices}>
                <p style={{ color: 'var(--textSoft)' }}>Special Price</p>
                <p style={{ color: 'var(--textSoft)' }}>₹ {product?.selling_price}</p>
            </div>
            <div className={styles.discount_per}>
                <p>Overall you save ₹{product?.mrp - product.selling_price} ({percentage(product)})% on this product</p>
            </div>
        </div>
    )
}

export default PriceInfo