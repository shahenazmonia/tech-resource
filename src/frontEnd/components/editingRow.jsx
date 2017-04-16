import React from 'react';
import types from 'prop-types';

import TdInput from './tdInput.jsx';
import {deleteResource, updateResource, freezeRow} from '../actions.js';

class EditingRow extends React.Component {
    constructor(props) {
        super(props);
    }
    handleUpdate(tr, cb) {
        freezeRow();
        cb(tr.tech, tr.url);
    }
    render() {
        return (
            <tr id={this.props.resource.id} key={this.props.resource.id}>
                <td >{this.props.resource.id}</td>
                <td ><TdInput resource={this.props.resource}type={'tech'}/></td>
                <td ><TdInput resource={this.props.resource}type={'url'}/></td>
                <td>
                    <button type='button' className='close' onClick={() => {
                        deleteResource(this.props.resource.id);
                    }}>
                        <span>DELETE</span>
                    </button>
                </td>
                <td>
                    <button type='button' onClick={() => {
                        this.handleUpdate(this.props.trStatus, (tech, url) => {
                            updateResource(this.props.resource.id, {
                                tech: tech,
                                url: url
                            });
                        });
                    }}>
                        <span>save</span>
                    </button>
                </td>
            </tr>
        );
    }
}
EditingRow.propTypes = {
    resource: types.PropTypes.object,
    trStatus: types.PropTypes.object
};
export default EditingRow;
