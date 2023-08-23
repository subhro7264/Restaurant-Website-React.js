import React, { Fragment, useContext } from "react";
import MedicineForm from "./MedicineForm";
import MedicineItem from "./MedicineItem"
import CardContext from "../store/cart-context";


const Med = (props) => {

    const cartCtx=useContext(CardContext);
    const addToHandler=(amount)=>{
        cartCtx.addItem({
          id:props.id,
          name:props.name,
          description:props.description,
          amount:amount,
          price:props.price
        })
      }

  return (
    <Fragment>
      <MedicineForm addTo={addToHandler}/>
      <MedicineItem/>
    </Fragment>
  );
};
export default Med;
