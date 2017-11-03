import React  from 'react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
    }
  }


onChange = (event) => {
  this.setState({
    term: event.target.value
  });
}

onSubmit = (event) => {
  event.preventDefault();
  this.setState ({
    term: '',
    items: [...this.state.items, this.state.term]
  })
}
// onClick =  (event) => {
//   event.preventDefault();
//   this.setState({
//     term: '',
//     items: []
//   })
// }
onClick = (index) => {
  let newItems = this.state.items.slice();
  newItems.pop()
  console.log(newItems);
  this.setState({
    items: newItems
  })
}
render() {
   return (
     <div>
       <form onSubmit = {this.onSubmit}>
         <input value = {this.state.term} onChange={this.onChange}/>
         <button type="submit">Add To Do Item</button>
       </form>
       <List  onClick={this.onClick}items={this.state.items}/>
       {/* <button type="submit" onClick={this.onClick}>Delete to do List</button> */}

     </div>
   );
 }
}
export default App;
