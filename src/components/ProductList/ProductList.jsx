import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { data } from './data';
import styles from './ProductList.module.scss';

const ProductList = () => {
    return (
        <div className={styles.product_list}>
            {
                data?.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    )
}

export default ProductList