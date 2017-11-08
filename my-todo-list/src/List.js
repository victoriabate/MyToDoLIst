import React  from 'react';

const List =(props) => (
    <ul>
      {props.items.map((items, index)=><li key={index}>{items} <button onClick={props.onClick}>Delete</button></li>)}
      </ul>
);



export default List;
