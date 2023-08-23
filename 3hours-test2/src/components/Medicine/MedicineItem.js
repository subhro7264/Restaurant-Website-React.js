import React, { Fragment, useContext } from "react";

import classes from "./MedicineItem.module.css";
import CartContext  from '../../store/cart-context'

const MedicineItem = (props) => {
const medCtx=useContext(CartContext);

const addToCartHandler=(amount)=>{
  medCtx.addItem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
  });

}
  return (
    <Fragment>
      <div >
        {props.items.map((item) => (
          <div className={classes.list}>
            <div>
              <h3>{item.name} :</h3>
            </div>
            <div>
              <h3> : : {item.description} :</h3>
            </div>
            <div>
              <h3> : :{item.price}  : :</h3>
            </div>
            <button onClick={addToCartHandler}> Add To Cart</button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default MedicineItem;
