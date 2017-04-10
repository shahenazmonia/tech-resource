import React from 'react';
import {echoData} from './actions.jsx';
import {add} from './database/migrate.js' // eslint-disable-line

class ResourceForm extends React.Component {
    constructor(props) {
        super(props);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeUrl = this.changeUrl.bind(this);
        this.state = {
            title: '',
            url: '',
            buttonStyle: {
                validStyle: {
                    backgroundColor: 'green'
                },
                invalidStyle: {
                    backgroundColor: 'red'
                }
            }
        };
    }

    changeTitle(ev) {
        this.setState({title: ev.target.value});
    }
    changeUrl(ev) {
        this.setState({url: ev.target.value});
    }

    render() {
        const buttonStyle = (this.state.title === '' || this.state.url === '')
            ? this.state.buttonStyle.invalidStyle
            : this.state.buttonStyle.validStyle;

        return (
            <div >
                <label>Name</label>
                <input value={this.state.title} onChange={this.changeTitle}></input><br/>
                <label>url</label>
                <input value={this.state.url} onChange={this.changeUrl}></input><br/>
                <button style={buttonStyle} onClick={() => {

                    echoData({
                        title :this.state.title,
                        url:this.state.url
                    });
                    // eslint-disable-line
                    // (this.state.title === '' || this.state.url === '')
                    //     ? alert('Bad Data!')
                    //     : this.props.addResource(this.state);this.setState({title: '', url: ''});
                }}>add</button>
            </div>
        );
    }
}

export default ResourceForm;
