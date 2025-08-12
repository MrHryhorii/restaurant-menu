import React from 'react'
import Dish from './Dish';
import '../css/menu.css'

const Menu = (props) => {
  return (
    <div className='menu'>
        <section className='cards'>
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