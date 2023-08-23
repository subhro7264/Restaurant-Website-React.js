import React, { Fragment,useState } from "react";
import MedicineForm from "./MedicineForm";
import MedicineItem from "./MedicineItem"
// import CardContext from "../../store/cart-context";


const Med = (props) => {

    // const cartCtx=useContext(CardContext);
    // const addToHandler=(amount)=>{
    //     cartCtx.addItem({
    //       id:props.id,
    //       name:props.name,
    //       description:props.description,
    //       amount:amount,
    //       price:props.price
    //     })
    //   }
    const [orderTable, setOrderTable] = useState([]);
    const orderHandler = (order) => {
      setOrderTable((perOrder) => {
        return [order, ...perOrder];
      });
    };

  return (
    <Fragment>
      <MedicineForm addTo={orderHandler}/>
      <MedicineItem items={orderTable} />
    </Fragment>
  );
};
export default Med;
