import React from 'react';
import types from 'prop-types';
import EditingRow from './editingRow.jsx';
import {deleteResource, updateRow} from '../actions.js';

class MyTable extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.resourceData.map((elem) => {
            if (this.props.trStatus.id === elem.id) {
                return(<EditingRow resource={elem} trStatus={this.props.trStatus} key={elem.id}/>);
            }
            else {
                return (
                    <tr id={elem.id} key={elem.id}>
                        <td >{elem.id}</td>
                        <td >{elem.tech}</td>
                        <td >{elem.url}</td>
                        <td>
                            <button type='button' className='close' onClick={() => {
                                deleteResource(elem.id);
                            }}>
                                <span>DELETE</span>
                            </button>
                        </td>
                        <td>
                            <button type='button' onClick={()=>{
                                updateRow({id:elem.id,tech:elem.tech,url:elem.url});
                            }}>
                                <span>update</span>
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
            </table></div>
        );
    }
}
MyTable.propTypes = {
    resourceData: types.PropTypes.array,
    trStatus: types.PropTypes.object
};

export default MyTable;
