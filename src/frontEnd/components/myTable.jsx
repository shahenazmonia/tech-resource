import React from 'react';
import types from 'prop-types';
import EditingRow from './editingRow.jsx';


const MyTable = ({resourceData,editRowStatus, onRemove, updateRow, onUpdate}) => {
    const data = resourceData.map((elem) => {
        if (editRowStatus === elem.id) {
            return (<EditingRow resource={elem} key={elem.id} onUpdate={onUpdate}/>);
        } else {
            return (
                <tr id={elem.id} key={elem.id}>
                    <td >{elem.id}</td>
                    <td >{elem.tech}</td>
                    <td >{elem.url}</td>
                    <td>
                        <button type='button' className='close' onClick={() => {
                            onRemove(elem.id);
                        }}>
                            <span>DELETE</span>
                        </button>
                    </td>
                    <td>
                        <button type='button' onClick={() => {
                            updateRow(elem.id);
                        }}>
                            <span>UPDATE</span>
                        </button>
                    </td>
                </tr>
            );

        }
    });
    return (
        <div>
            <table id="#table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>resource</th>
                        <th>url</th>
                        <th>X</th>
                        <th>update</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        </div>
    );
};


MyTable.propTypes = {
    onRemove: types.PropTypes.func,
    updateRow:types.PropTypes.func,
    onUpdate: types.PropTypes.func,
    resourceData: types.PropTypes.func,
    editRowStatus: types.PropTypes.func

};

export default MyTable;
