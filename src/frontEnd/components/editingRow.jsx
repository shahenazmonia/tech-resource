import React from 'react';
import types from 'prop-types';
import {deleteResource, updateResource, freezeRow} from '../actions.js';

class EditingRow extends React.Component {
    constructor(props) {
        super(props);
    }
    handleUpdate(techValue, urlValue, cb) {
        freezeRow();
        cb(techValue.textContent, urlValue.textContent);
    }
    render() {
        let techValue;
        let urlValue;
        return (
            <tr id={this.props.resource.id} key={this.props.resource.id}>
                <td contentEditable='false'>{this.props.resource.id}</td>
                <td contentEditable={true} ref={(input) => {
                    techValue = input;
                }}>{this.props.resource.tech}</td>
              <td contentEditable={true} ref={(input) => {
                  urlValue = input;
              }}>{this.props.resource.url}</td>
                <td>
                    <button type='button' className='close' onClick={() => {
                        deleteResource(this.props.resource.id);
                    }}>
                        <span>DELETE</span>
                    </button>
                </td>
                <td>
                    <button type='button' onClick={() => {
                        this.handleUpdate(techValue, urlValue, (tech, url) => {
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
    resource: types.PropTypes.object
};
export default EditingRow;
