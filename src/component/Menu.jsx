import React from 'react'
import Dish from './Dish';

const Menu = (props) => {
  return (
    <div>
        <p>This is the menu component.</p>
        <p>Prop received with length: {props.array.length}</p>

        <ul>
            {
                props.array
                .map(
                    item => (
                    <li key={item.id}>{item.tittel}</li>
                    )
                )
            }
        </ul>
    </div>
  )
}

export default Menu