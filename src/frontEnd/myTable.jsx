import React from 'react'

const myTable = (props)=>{
  console.log(props);
  const data = props.data.map((elem)=>{
    return (
              <tr>
                <td>{elem.title}</td>
                <td>{elem.url}</td>
                <td>
                  <button
                  type='button'
                  className='close'
                  onClick={(event)=>{props.onRemoveParent(elem)}}
                   >
                   <span>&times;</span>
                  </button>
                </td>
                </tr>

            )
          })

  return(
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
     </table>)
   }

export default myTable;
