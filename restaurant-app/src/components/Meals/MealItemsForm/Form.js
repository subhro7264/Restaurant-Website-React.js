import React from 'react';
import classes from './Form.module.css'
import Input from '../../UI/Input';


const Form=(props)=>{
    return(
        <>

        <form className={classes.form} >
       
        <Input label="Amount" input={{
            id:'amount',
            type: 'number',
            min:'1',
            max:'10',
            defaultValue:"1"
        }}/>
        <button type='submit'> + Add</button>
       </form>
      
       </>
    )
}
export default Form;