import React, { Fragment, useRef } from "react";
import  classes from './MedicineForm.module.css'
const MedicineForm = (props) => {
  const nameRef = useRef();
  const DescriptionsRef = useRef();
  const priceRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredDescriptions = DescriptionsRef.current.value;
    const enteredAmount = priceRef.current.value;
    const enteredAmountStringToNumber = +enteredAmount;

    const myObj = {
      id: Math.random(),
      name: enteredName,
      description: enteredDescriptions,
      price: enteredAmountStringToNumber,
    };
    const strMyObj=JSON.stringify(myObj)
    props.addTo(JSON.parse(strMyObj))
  };
  return (
    <Fragment>
      <div className={classes.div}>
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="">Medicine Name</label>
        <input type="text" ref={nameRef} />
        <label htmlFor="">Descriptions</label>
        <input type="text" ref={DescriptionsRef} />
        <label htmlFor="">Price</label>
        <input type="number" ref={priceRef} />

        <button type="submit"> Add Products</button>
      </form>
      </div>
    </Fragment>
  );
};
export default MedicineForm;
