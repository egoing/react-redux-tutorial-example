import React, {Component} from 'react';
import store from '../store';
export default class AddNumber extends Component {
    state = {size:1}
    render() {
      return (
        <div>
          <h1>Add Number</h1>
          <input type="button" value="+" onClick={function(){
            store.dispatch({type:'INCREMENT', size:this.state.size});
          }.bind(this)}></input>
          <input type="text" value={this.state.size} onChange={function(e){
            this.setState({size:Number(e.target.value)});
          }.bind(this)}></input>
        </div>
      )
    }
  }