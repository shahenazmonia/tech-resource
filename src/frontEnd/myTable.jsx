import React from 'react'
import store from './reduxes.js'

const myTable = (props) => {
    const data = store.getState().resources.map((elem) => {
        return (
            <tr key={elem.title}>
                <td>{elem.title}</td>
                <td>{elem.url}</td>
                <td>
                    <button type='button' className='close' onClick={(ev) => store.dispatch({type: 'REMOVE_RESOURCE', payload: elem})}>
                        <span>&times;</span>
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>resource</th>
                    <th>url</th>
                </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
        </table>
    )
}

export default myTable;
