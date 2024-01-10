import React from 'react';
import '../../css/UI/Card.css';

function Card(props) {

    const classes = 'card ' + props.className;

  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

export default Card;
