import React from 'react'
import Menu from './Menu';
import styles from '../css/app.module.css';
// import menu data
import data from './data'

const App = () => {
    //get meny
    const meny = data();

    return (
        <div className={styles.app}>
            <p className={styles.apptitle}>Meny</p>
            <Menu array={meny}/>
        </div>
    )
}

export default App