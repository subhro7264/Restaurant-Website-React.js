import React from 'react';
import './Header.css';
import  './CartLogo.png'

const Header=(props)=>{
    return(
        <React.Fragment>

        <div className="mealHeader">

        <div className='header-Title'> <h1>ReactMeals</h1></div> 

       <div className="cart"><h2>Your Cart</h2>
    
       </div>


        </div>



        </React.Fragment>
    )

}

export default Header;