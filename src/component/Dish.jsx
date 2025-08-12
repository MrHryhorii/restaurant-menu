import React from 'react'
import styles from '../css/dish.module.css'

const Dish = (props) => {

  const alt = props.dish.tittel;
  const path = `${import.meta.env.BASE_URL}img/${props.dish.id}.jpg`;

  const tagColor = {
    Hovedrett:{
      background: "#dce6ff",
      border: "1px solid #90b7ff"
    },
    Forrett:{
      background: "#dcffe8ff",
      border: "1px solid #90ffa4ff"
    },
    Dessert:{
      background: "#ffdcf8ff",
      border: "1px solid #ff90ebff"
    }
  };

  let tagStyle = tagColor[props.dish.kategori] || {};

  return (
    <article className={styles.dish}>
      <img src={path} alt={alt} />
      <header>
        <h2 className={styles.title}>{props.dish.tittel}</h2>
        <h2 className={styles.price}>{props.dish.pris}</h2>
      </header>
      <main>
        <p className={styles.ingredients}>{props.dish.ingredienser}</p> 
      </main>
      <footer>
        <p className={styles.tag} style={tagStyle}>{props.dish.kategori}</p>
      </footer>
    </article>
  )
}

export default Dish