import React, { useRef, useState} from "react";
import classes from "./Form.module.css";
import Input from "../../UI/Input";

const Form = (props) => {
    const[amountIsValid, setAmountIsValid]=useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount= amountInputRef.current.value;
    const enteredAmountStringToNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountStringToNumber < 1 ||
      enteredAmountStringToNumber > 5
    ) {
        setAmountIsValid(false);
        return;
    }
    props.onAddToCart(enteredAmountStringToNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          defaultValue: "1",
        }}
      />
      <button type="submit"> + Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  );
};
export default Form;
