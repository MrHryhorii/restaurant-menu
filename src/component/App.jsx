import React from 'react'
import Menu from './Menu';
import '../css/app.css'
// import menu data
import data from './data'

const App = () => {
    //get meny
    const meny = data();

    return (
        <div className='app'>
            <p className='app-title'>Meny</p>
            <Menu array={meny}/>
        </div>
    )
}

export default App