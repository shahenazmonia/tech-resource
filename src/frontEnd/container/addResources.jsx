import {connect} from 'react-redux';
import ResourceForm from '../components/resourceForm.jsx';
import {insertResource} from '../actions.js';


const mapsDispatchToProps = () => {
    return {
        onAdd:(data) => { insertResource(data);}
    };
};


const addResource = connect(mapsDispatchToProps)(ResourceForm);

export default addResource;
