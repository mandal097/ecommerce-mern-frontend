import React from 'react';
import styles from './BlogCard.module.scss';
import { Link } from 'react-router-dom';


const BlogCard = () => {
    return (
        <Link className={styles.card} to={`/blog/maybe-id-of-the-blog`}>
            <div className={styles.img}>
                <img src="https://media.istockphoto.com/id/1199536938/photo/food-blogger-young-woman-in-glasses-sitting-at-stylish-apartment-taking-photo-of-desserts-on.jpg?b=1&s=170667a&w=0&k=20&c=TfOasHUdNCJfXI5bmTtyUs5yKgCEpKscrAQaoMrVMUc=" alt="" />
            </div>
            <p>Interesting Facts You Must Know About Cold Brew</p>
        </Link>
    )
}

export default BlogCard