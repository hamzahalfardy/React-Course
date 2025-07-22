import React from 'react'
import styles from './Foods/Food.module.css';
import { images } from '../data'
import Cards from './Cards';


const Recipes = () => {
  return (
    <div className={styles.center}>
      <Cards>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.img} alt="African Foods" />
        </div>
      ))}
      </Cards>          
          <button className={styles["read-more"]}>
            Read More
          </button>
    </div>
  )
}

export default Recipes
