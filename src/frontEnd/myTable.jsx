import React from 'react'; //eslint-disable-line
import {deleteResource} from './actions.js';// eslint-disable-line

const myTable = (props) => {
    const data = props.resourceData.map((elem) => {
        return (
            <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.tech}</td>
                <td>{elem.url}</td>
                <td>
                    <button type='button' className='close' onClick={
                        (ev)=>{deleteResource(elem.id)}// eslint-disable-line
                      }
                      >
                        <span>&times;</span>
                    </button>
                </td>
            </tr>
        );
    });
    return (
        <table
          id="#table"
          >
            <thead>
                <tr>
                    <th>resource</th>
                    <th>url</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
        </table>
    );
};

export default myTable;
