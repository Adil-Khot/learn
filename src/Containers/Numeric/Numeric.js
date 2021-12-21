import React,{useState} from 'react';
//import Aux from '../../HOC/Auxx/Auxx'
import Button from '../../Components/Button/Button';
import classes from './numeric.module.css'

const Numeric =()=> {
  const [count, setCount]=useState(0);
  
    return(
      <div className={classes.numeric}>
        <Button testid="dec" label="(-)" click={()=>setCount(count - 1)}/>
        <div data-testid="val" >{count}</div>
        <Button testid="inc" label="(+)" click={()=>setCount(count + 1)}/>
      </div>
    );
  
}

export default Numeric;
