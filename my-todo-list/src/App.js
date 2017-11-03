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

render() {
   return (
     <div>
       <form onSubmit = {this.onSubmit}><List items={this.state.items}/>
         <input value = {this.state.term} onChange={this.onChange}/>
         <button type="submit">Add To Do Item</button>
       </form>

     </div>
   );
 }
}
export default App;
