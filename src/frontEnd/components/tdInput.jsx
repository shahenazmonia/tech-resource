import React from 'react';
import types from 'prop-types';
import {updateRow} from '../actions.js';

class TdInput extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            id:null,
            tech:'',
            url:'',
            type:''
        };
        this.onTechChange = this.onTechChange.bind(this);
        this.onURLChange = this.onURLChange.bind(this);
    }
    onTechChange(ev){
        this.setState({
            tech:ev.target.value
        });
        updateRow(this.state);
    }
    onURLChange(ev){
        this.setState({
            url:ev.target.value
        });
        updateRow(this.state);
    }
    componentDidMount(){
        this.setState({
            id:this.props.resource.id,
            tech:this.props.resource.tech,
            url:this.props.resource.url,
            type:this.props.type,
        });
    }
    render(){

        if(this.state.type==='tech'){
            return(<input value={this.state.tech} onInput={this.onTechChange}></input>);
        }
        else{
            return(<input value={this.state.url} onInput={this.onURLChange}></input>);
        }
    }
}
TdInput.propTypes = {
    resource: types.PropTypes.object,
    type:types.PropTypes.string
};
export default TdInput;
