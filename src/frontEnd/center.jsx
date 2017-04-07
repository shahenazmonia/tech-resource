import React from 'react'
import Header from './header.jsx'
import ResourceForm from './resourceForm.jsx'
import MyTable from './myTable.jsx'
import store from './reduxes.js'

const Center = (props) => {
    return (
        <div>
            <Header/>
            <ResourceForm/>
            <MyTable/>
        </div>
    )
}

export default Center
