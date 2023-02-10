import React from 'react';
import Categories from '../../components/Categories/Categories';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
    return (
        <div className={`${styles.product_page}`}>
            <Categories type='categories_page' />
            <div className={styles.wrapper}>
                <h1>ProductPage</h1>
            </div>
        </div>
    )
}

export default ProductPage