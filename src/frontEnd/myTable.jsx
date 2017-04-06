import React from 'react'

const myTable = (props)=>{
  console.log(props);
  const data = props.data.map((elem)=>{
    console.log("resource",elem);
    return (
              <tr>
                <td>{elem.title}</td>
                <td>{elem.url}</td>
                <td>
                  <button
                  type='button'
                  className='close'
                  onClick={(event)=>{console.log('sddsds');props.onRemoveParent(elem)}}
                   >
                   <span>&times;</span>
                  </button>
                </td>
                </tr>

            )
          })

          console.log('d',data);
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
