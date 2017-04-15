import React from 'react';
import types from 'prop-types';
import {deleteResource, updateResource, updateRow,freezeRow} from '../actions.js';

class MyTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tech:'',
            url:'',
            inputStyle:{
                validStyle:{
                    bodrer : 'none',
                    backgroundColor:'GRAY',
                    width:'100%'
                },
                invalidStyle :{
                    backgroundColor: 'white',
                    width: '100%'
                }
            }
        };

    }

    handleUpdate(techValue,urlValue,cb){
        this.setState({
            tech: techValue.textContent ,
            url: urlValue.textContent
        });
        cb(techValue.textContent,urlValue.textContent);
    }


    render() {

        // const inputStyle = (this.state.inputDisabled)
        //         ? this.state.inputStyle.invalidStyle
        //         : this.state.inputStyle.validStyle;
        //

        const data = this.props.resourceData.map((elem) => {
            let techValue  ;
            let urlValue  ;
            return (

                <tr id={elem.id} key={elem.id} >
                    <td contentEditable='false' >{elem.id}</td>
                    <td  contentEditable={ this.props.trStatus === elem.id}
                         ref={(input) => { techValue = input; }}>{elem.tech}</td>
                    <td  contentEditable={ this.props.trStatus === elem.id}
                         ref={(input) => { urlValue = input; }}>{elem.url}</td>
                    <td>
                          <button type='button' className='close' onClick={() => {
                              deleteResource(elem.id);
                          }}>
                              <span>DELETE</span>
                               </button>
                    </td>
                    <td>
                        <button type='button' onClick={() => {
                            if(this.props.trStatus!==null){
                                this.handleUpdate(techValue,urlValue,(tech,url)=>{
                                    updateResource(elem.id  ,{tech:tech,url:url} );
                                    freezeRow();
                                });
                            }else{
                                updateRow(elem.id);
                            }
                        }}>
                            <span>{(this.props.trStatus==elem.id)?'save':'update'}</span>
                        </button>
                    </td>
                </tr>

            );
        });
        return (
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
        );
    }
}

MyTable.propTypes = {
    resourceData:types.PropTypes.array,
    trStatus:types.PropTypes.array
};

export default MyTable;
