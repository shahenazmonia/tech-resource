import React from 'react';
import types from 'prop-types';

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
                    <button type='button' className='close' onClick={() =>this.props.onUpdate(this.props.resource.id,{tech: this.props.resource.tech, url: this.props.resource.url})
                    }>
                        <span>CANCEL</span>
                    </button>
                </td>
                <td>
                    <button type='button' onClick={() =>this.props.onUpdate(this.props.resource.id,this.state)}>
                        <span>SAVE</span>
                    </button>
                </td>
            </tr>
        );
    }
}
EditingRow.propTypes = {
    resource: types.PropTypes.object,
    onUpdate: types.props.func
};
export default EditingRow;
