import React from 'react'
import '../css/dish.css'

const Dish = (props) => {
  return (
    <article className='dish'>
      <header>
        <h2 className='title'>{props.dish.tittel}</h2>
        <h2 className='price'>{props.dish.pris}</h2>
      </header>
      
      <p>{props.dish.ingredienser}</p> 

      <footer>
        <p className='tag'>{props.dish.kategori}</p>
      </footer>
    </article>
  )
}

export default Dish