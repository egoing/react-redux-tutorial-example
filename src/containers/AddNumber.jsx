import AddNumber from "../components/AddNumber";
import {connect} from 'react-redux';
function mapDispatchToProps(dispatch){
    return {
        onClick:function(size){
            dispatch({type:'INCREMENT', size:size});
        }
    }
}
export default connect(null, mapDispatchToProps)(AddNumber);
/*
import React, { Component } from "react";
import store from '../store';
export default class extends Component{
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size:size});
        }.bind(this)}></AddNumber>
    }
}
*/