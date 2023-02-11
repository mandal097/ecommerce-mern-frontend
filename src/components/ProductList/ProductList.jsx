import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.scss';
import { data } from '../../dummydata/data';

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