import React from 'react'
import Dish from './Dish';

const Menu = (props) => {
  return (
    <div className='menu'>
        <p>This is the menu component.</p>

        <section>
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