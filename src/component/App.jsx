import React from 'react'
import Menu from './Menu';
// import menu data
import data from './data'

const App = () => {
    //get meny
    const meny = data();

    return (
        <div className='app'>
            <p>This is the main component.</p>
            <Menu array={meny}/>
        </div>
    )
}

export default App