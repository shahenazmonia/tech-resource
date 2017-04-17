import {connect} from 'react-redux';
import MyTable from '../components/myTable.jsx';
import {deleteResource, updateRow,updateResource} from '../actions.js';

const mapsStatetoProps = (state) => {
    return {
        resourceData: state.resources,
        editRowStatus: state.editRowStatus};
};
const mapsDispatchToProps = () => {
    return {
        onRemove: (id) => {
            deleteResource(id);
        },
        updateRow: (id) => {
            updateRow(id);
        },
        onUpdate:(id,data)=>{updateResource(id,data);}
    };
};

const TableContainer = connect(mapsStatetoProps, mapsDispatchToProps)(MyTable);

export default TableContainer;
