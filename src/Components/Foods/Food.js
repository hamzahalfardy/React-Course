// import React from 'react';
// // import './Foods/Food.css'
// import { SwiperSlide } from 'swiper/react';
// import { SwiperWrapper } from './SwiperWrapper';
// import { images, blogs } from "../../../../data"
// import { Cards } from './Foods/Cards';


// export function Recipes() {
//   return (
//     <div className={styles['center']}>
//       <Cards>
//         {images.map((image) => (
//           <div key={image.id}>
//             <img src={image.img} alt="African Foods" />
            
//     </div>
//       ))}          
//       </Cards>
//           <button className={styles["read-more"]}>
//             Read More
//           </button>

//     </div>
//   );
// }
// // export default Food

// export function Blog() {
//   return (
//     <div className={styles.blogWrapper}>
//       <SwiperWrapper>
//         {blogs.map((blog) => (
//           <SwiperSlide key={blog.id}>
//             <div className={styles.blogCard}>
//               <img src={blog.img} alt={blog.header} />
//               <div className={styles.blogContent}>
//                 <h3>{blog.header}</h3>
//                 <p>{blog.details}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </SwiperWrapper>
//     </div>
//   );
// }