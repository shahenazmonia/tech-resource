import React from 'react'

const myTable = (props) => {
    const data = props.resourceData.map((elem) => {
        return (
            <tr key={elem.title}>
                <td>{elem.title}</td>
                <td>{elem.url}</td>
                <td>
                    <button type='button' className='close' onClick={
                        (ev)=>{props.removeResource(elem)}
                      }
                      >
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
