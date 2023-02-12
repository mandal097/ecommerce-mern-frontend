import React from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import styles from './Blog.module.scss';

const Blog = () => {
    return (
        <div className={styles.blog}>
            <div className={styles.cover}>
                <div className={styles.cover_img}>
                    <img src="/assets/images/blog_one.jpg" alt="" />
                </div>
                <div className={styles.layer}>
                    <span>our blog</span>
                </div>
            </div>
            <div className={styles.blog_card_container}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default Blog