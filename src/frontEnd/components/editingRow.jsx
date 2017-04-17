import React from 'react';
import types from 'prop-types';
import {deleteResource, updateResource} from '../actions.js';

class EditingRow extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            tech:this.props.resource.tech,
            url:this.props.resource.url
        };
        this.onTechChange = this.onTechChange.bind(this);
        this.onURLChange = this.onURLChange.bind(this);
    }

    onTechChange(ev){
        this.setState({
            tech:ev.target.value
        });
    }
    onURLChange(ev){
        this.setState({
            url:ev.target.value
        });
    }
    render() {
        return (
            <tr key={this.props.resource.id}>
                <td >{this.props.resource.id}</td>
                <td ><input value={this.state.tech} onChange={this.onTechChange}></input></td>
                <td ><input value={this.state.url} onChange={this.onURLChange}></input></td>
                <td>
                    <button type='button' className='close' onClick={() => {
                        deleteResource(this.props.resource.id);
                    }}>
                        <span>DELETE</span>
                    </button>
                </td>
                <td>
                    <button type='button' onClick={() => {
                        updateResource(this.props.resource.id,this.state);
                    }}>
                        <span>save</span>
                    </button>
                </td>
            </tr>
        );
    }
}
EditingRow.propTypes = {
    resource: types.PropTypes.object
};
export default EditingRow;
