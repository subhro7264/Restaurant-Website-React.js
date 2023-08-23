import React, { Fragment, useContext } from "react";

import CardContext from "../store/cart-context";

const MedicineItem = () => {
  const cartCtx = useContext(CardContext);
  return (
    <Fragment>
      <div>
        <div>{cartCtx.name}</div>
        <div>{cartCtx.description}</div>
        <div>{cartCtx.price}</div>
        <div>{cartCtx.amount}</div>
      </div>
    </Fragment>
  );
};
export default MedicineItem;
