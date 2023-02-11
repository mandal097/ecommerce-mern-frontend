import React from 'react';
import styles from './Home.module.scss';
import { banners, aboutProdutsType } from './data'
import Categories from '../../components/Categories/Categories';
import Banner from '../../components/Banner/Banner';
import ProductList from '../../components/ProductList/ProductList';

const ProductType = ({ ele }) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <span>{ele.product}</span>
      {ele.about.split('<br/>').map(str => <p >{str}</p>)}
    </div>
  )
}

const Home = () => {
  return (
    <div className={`${styles.home} ${`container`}`}>
      <Categories type='shophome' />
      <Banner banners={banners} />
      <div className={styles.discount_coupan}>
        <img src="/assets/images/discount_coupan.jpg" alt="" />
      </div>

      <ProductList />

      <div className={styles.products_availability}>
        <h1>What Can You Buy From WeeConnect shop?</h1>
        {aboutProdutsType?.map(ele => (
          <ProductType key={ele.id.toString()} ele={ele} />
        ))
        }
      </div>
    </div>
  )
}

export default Home