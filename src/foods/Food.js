import './Food.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFaceGrinTongue } from '@fortawesome/free-regular-svg-icons/faFaceGrinTongue';

import styles from "./Food.module.css"
import { faCommentDots, faKitchenSet, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons/faBookOpenReader';


export const NavBar = () => {
  return (
    <div className='food-nav'>
        <div>
          <img className={styles["food-logo"]} src="rest-logo.png" alt=""/>
        </div>

        <div className={styles["menu"]}>
            <div>
              <FontAwesomeIcon icon={faKitchenSet} size='1.5x'/>
              <p>Kitchen</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faFaceGrinTongue} size='1.5x' />
              <p>Taste</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faBookOpenReader} size='1.5x' />
              <p>Recipes</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faBlogger} size='1.5x'/>
              <p>Blog</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCommentDots} size='1.5x'/>
              <p>Contact</p>
            </div>
        </div>

        <div className={styles["menu"]}>
          
          <div className={styles["contact"]}>
            <FontAwesomeIcon icon={faPhone} size='1.5x'/><span>+234 814 4781 580</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebookF} size='1.5x'/>
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} size='1.5x'/>
          </div>
        </div>
    </div>
  )
}


export function Restaurant() {
  return (
    <>
      <div className={styles["banner"]} >
        <img 
        src="/images/foods.jpg" 
        alt="Restaurant Banner" />

        <div className={styles['Lorem']}>
          <h1>Health Food Recipe</h1>
          <p>
            Lorem ipsum dolor sit amet, ipsum dolor sit amet elit, sed do eiusmod tempor.
          </p>
          <button>Read More</button>
        </div>
      </div>

    </>
  )
}

export function Taste() {
  const foodCategories = [
    { name: 'Salad', img: 'salad.png' },
    { name: 'Cake', img: 'cake.png' },
    { name: 'Burger', img: 'burger.webp' },
    { name: 'Ice-cream', img: 'ice-cream.webp' },
    { name: 'Paster', img: 'paster.png' },
    { name: 'Cookies', img: 'cookies.png' },
    { name: 'Hot Dog', img: 'hotDog.webp' },
    { name: 'Fish Roll', img: 'fish-roll.png' },
  ];

  return (
    <div className={styles['food-taste']}>
      <h1>Taste of food</h1>
      <div className={styles['food-container']}>
        {foodCategories.map((item, index) => (
          <div key={index} className={styles['food-listed']}>
            <img src={`/images/${item.img}`} alt={item.name} />
            <div className={styles['food-content']}>
              <h3>{item.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
// export default Food



// export default NavBar
