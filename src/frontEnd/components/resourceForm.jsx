import React from 'react';
import types from 'prop-types';

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
                    (this.state.title === '' || this.state.url === '')
                        ? alert('Please fill inputs!')
                        : this.props.onAdd(this.state);

                }} >add</button>
            </div>
        );
    }
}

ResourceForm.propTypes = {
    onAdd: types.PropTypes.func
};
export default ResourceForm;
