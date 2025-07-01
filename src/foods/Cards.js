import React from 'react'
import styles from './Food.module.css'

export const Footer = ({children}) => {
return (
    <div className={styles['Footer']}>
        {children}
    </div>
)
}

export const Cards = ({ children }) => {
return (
    <div className={styles['recipe']}>
        {children}
    </div>
)
}


// export default Cards
