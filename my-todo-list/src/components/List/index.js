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
      {props.items.map((item,index) => <li key={index}> <RaisedButton style={{...staticStyle,...style[item.complete ? 'complete': 'incomplete']}}
        onClick={() => props.onComplete(item.id, !item.complete) } primary={true}>
      {item.complete ? 'Done' : 'Todo'}</RaisedButton>{item.toDo}
      </li>)}
    </ul>

 )

};

export default List;
