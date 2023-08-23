import React, { Fragment } from 'react'
import classes from './Header.module.css';
const Header=()=>{
    return(
<Fragment>
<div  className={classes.cart}>
    <div><h3>Medicine</h3></div>
    <button className={classes.cartButton} >
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>

    </button>
</div>

</Fragment>
    )
}
export default Header;