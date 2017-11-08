import React from 'react';
import List from '../List';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    }
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [
        ...this.state.items, {
          toDo: this.state.term,
          complete: false
        }
      ]
    })
  }

  onComplete = index => {
    this.setState(prevState => ({
      items: [
        ...prevState.items.slice(0, index), {
          toDo: prevState.items[index].toDo,
          complete: !prevState.items[index].complete
        },

        ...prevState.items.slice(index + 1)
      ]
    }));
  }

  render() {
    const style1 = {
      color: 'green'
    };
    return (<div>
      <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      <form onSubmit={this.onSubmit}>
        <TextField hintText="Write here" floatingLabelText="This Floats!" value={this.state.term} onChange={this.onChange} /><br />

         <RaisedButton type="submit" label="Add to do " primary={true} />
      </form>
      <List items={this.state.items} onComplete={this.onComplete}/>
    </div>
    );
 }
}
export default App;
