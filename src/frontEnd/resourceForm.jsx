import React from 'react'
import store from './reduxes.js'

class ResourceForm extends React.Component {
    constructor(props) {
        super(props);
        this.changeTitle = this.changeTitle.bind(this)
        this.changeUrl = this.changeUrl.bind(this)
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
        }
    }

    changeTitle(ev) {
        this.setState({title: ev.target.value})
    }
    changeUrl(ev) {
        this.setState({url: ev.target.value})
    }

    render() {
        const buttonStyle = (this.state.title === '' || this.state.url === '')
            ? this.state.buttonStyle.invalidStyle
            : this.state.buttonStyle.validStyle

        return (
            <div>
                <label>Name</label>
                <input value = {this.state.title} onChange={this.changeTitle}></input>
                <label>url</label>
                <input value = {this.state.url} onChange={this.changeUrl}></input><br/>
                <button style={buttonStyle} onClick={(ev) => {
                    (this.state.title === '' || this.url === '')
                        ? alert('Bad Data!')
                        : store.dispatch({type: 'ADD_RESOURCES', payload: this.state})
                        this.setState({title:'',url:''})
                }}>add</button>
            </div>
        )
    }
}

export default ResourceForm
