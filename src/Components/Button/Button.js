import React from 'react';
import classes from './Button.module.css';

const Button = (props) =>{
  return(
    <button className={classes.DemoButton} data-testid={props.testid} onClick={props.click}>{props.label}</button>
  );
}

export default Button;