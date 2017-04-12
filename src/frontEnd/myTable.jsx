import React from 'react'; //eslint-disable-line
import {deleteResource, updateResource} from './actions.js'; // eslint-disable-line

class myTable extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
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


    render() {
        let titleInput,
            urlInput,id;
        const inputStyle = (this.state.inputDisabled)
                ? this.state.inputStyle.invalidStyle
                : this.state.inputStyle.validStyle;
      //  console.log('refs',titleInput,urlInput);
        const data = this.props.resourceData.map((elem) => {
            return (

                <tr key={elem.id} ref={() => {elem.id;}}> // eslint-disable-line
                    <td contentEditable="false" id={elem.id} style={inputStyle} >{elem.id}</td>
                    <td contentEditable={this.state.inputDisabled} id={elem.id} ref={(node) => {
                        titleInput = node;
                    }} style={inputStyle}>{elem.tech}</td>
                    <td contentEditable={this.state.inputDisabled} id={elem.id} ref={(node) => {
                        urlInput = node;
                    }} style={inputStyle}>{elem.url}</td>
                    <td>
                        <button type='button' className='close' onClick={() => { // eslint-disable-line}>
                            deleteResource(elem.id);
                        }}>
                            <span>DELETE</span>
                             </button>
                    </td>

                    <td>

                        <button type='button' className='s' onClick={() => {
                            if(this.state.inputDisabled){
                                updateResource(id  , {
                                    tech: titleInput.textContent,
                                    url: urlInput.textContent
                                });
                                this.setState({
                                    buttonStatus:'update',
                                    inputDisabled:false
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
    }
}

export default myTable;
