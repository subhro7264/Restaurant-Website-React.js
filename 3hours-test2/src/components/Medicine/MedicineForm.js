import React, { Fragment, useRef } from "react";

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


    const myObj={
      id:Math.random().toString(),
      name:enteredName,
      description:enteredDescriptions,
      price:enteredAmountStringToNumber
    }
   const stringMyObj=JSON.stringify(myObj);
   props.addTo(JSON.parse(stringMyObj));
  }
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <label htmlFor="">Medicine Name</label>
        <input type="text" ref={nameRef} />
        <label htmlFor="">Descriptions</label>
        <input type="text" ref={DescriptionsRef} />
        <label htmlFor="">Price</label>
        <input type="number" min={1} max={5} defaultValue={1} ref={priceRef} />

        <button type="submit"> Add Products</button>
      </form>
    </Fragment>
  );
};
export default MedicineForm;
