import React from 'react';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

const staticStyle = {
  padding: '15px'
}

const List = (props) => {
  const style = {
    complete: {
      color: 'green'
    },
    incomplete: {
      color: 'red'
    }
  }

const pad = {
    marginLeft: '50px'
}

const list1 = {
  complete:  {
    textDecoration: 'line-through',
  },
  incomplete: {
    textDecoration: 'none'
  }
}

 return (
    <ul>
      {props.items.map((item,index) => <li style={{...pad,...list1[item.complete ? 'complete': 'incomplete']}} key={index}>{item.toDo}
      <RaisedButton style={{...staticStyle,...style[item.complete ? 'complete': 'incomplete']}}
        onClick={() => props.onComplete(index) } primary={true}>
      {item.complete ? 'Done' : 'Todo'}</RaisedButton></li>)}
    </ul>

 )

};

export default List;
