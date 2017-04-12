import React from 'react'; //eslint-disable-line
import {deleteResource, updateResource} from './actions.js'; // eslint-disable-line

class myTable extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            tech:'',
            url:'',
            buttonStatus:'update',
            inputDisabled:false,
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
            url: urlValue.textContent ,
            buttonStatus:'update',
            inputDisabled:false
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

                <tr key={elem.id} >
                    <td contentEditable="false" >{elem.id}</td>
                    <td contentEditable={this.state.inputDisabled} ref={(input) => { techValue = input; }}>{elem.tech}</td>
                    <td contentEditable={this.state.inputDisabled} ref={(input) => { urlValue = input; }}>{elem.url}</td>
                    <td>
                          <button type='button' className='close' onClick={() => {
                              deleteResource(elem.id);
                          }}>
                              <span>DELETE</span>
                               </button>
                    </td>
                    <td>
                        <button type='button' onClick={() => {
                            if(this.state.inputDisabled){
                                this.handleUpdate(techValue,urlValue,(tech,url)=>{
                                    updateResource(elem.id  ,{tech:tech,url:url} );
                                });


                            }else{
                                this.setState({

                                    buttonStatus:'save',
                                    inputDisabled:true
                                });
                            }
                        }}>
                            <span>{this.state.buttonStatus}</span>
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

export default myTable;
