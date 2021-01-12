import React from 'react'
import Menu from '../Navigation/Menu/Menu'
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Menu/>
            <main>{props.children}</main>
        </div>
    )
}

export default Layout