import React from 'react'
import Dish from './Dish';
import styles from '../css/menu.module.css'

const Menu = (props) => {
  return (
    <div className={styles.menu}>
        <section className={styles.cards}>
            {
              props.array
              .map(
                  item => (
                  <Dish dish = {item} key={item.id}/>
                  )
                )
            }
        </section>
    </div>
  )
}

export default Menu