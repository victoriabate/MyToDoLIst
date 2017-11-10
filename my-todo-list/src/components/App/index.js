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

  updateScreen = () => {
    fetch('/api/todos')
    .then(result => result.json())
    .then(data => {
      this.setState(prevState => ({
        items: data.payload.map(item => ({
          id:item.id,
          toDo:item.toDo,
          complete:item.done
        }))
      }))
    });
  }

  componentDidMount = () => {
    this.updateScreen();
  };



  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();

    fetch("/api/todos", {method:"POST",
     headers:{"Accept":"application/json",
      "Content-Type":"application/json"},
       body:JSON.stringify({
         toDo:this.state.term,
         complete:false
       })
     })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => console.log(data));
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

  onComplete = (key, value) => {
    fetch(`/api/todos/${key}`,
       {method:"PATCH",
        headers:{"Accept":"application/json",
         "Content-Type":"application/json"},
          body:JSON.stringify({complete:value, id:key})})
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log('data is: '+data);
        this.updateScreen();
      });
  };

  render() {
    const style1 = {
      color: 'green'
    };
    return (<div>
      <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      <form onSubmit={this.onSubmit}>
        <TextField hintText="Write here" floatingLabelText="This Floats!" value={this.state.term} onChange={this.onChange}/><br/>

        <RaisedButton type="submit" label="Add to do " primary={true}/>
      </form>
      <List items={this.state.items} onComplete={this.onComplete}/>
    </div>);
  }
}
export default App;
