import React from 'react'
import Header from './header.jsx'
import ResourceForm from './resourceForm.jsx'
import MyTable from './myTable.jsx'
import store from './reduxes.js'



 class Center extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      resources:[{title:'',url:''}],
      buttonStyle: {
        validStyle: {
          backgroundColor: 'green'
        },
        invalidStyle: {
          backgroundColor: 'red'
        }
      }
    }
    this.validData = this.validData.bind(this)
    this.onRemove = this.onRemove.bind(this)
}


addResource(formState){
console.log(this.props.resources);
  this.setState({

      resources:this.props.resources.concat(formState)
  })

}
validData(titleUrl){
  (titleUrl.title === '' || titleUrl.url ==='')
  ?alert('Bad Data!') : this.addResource(titleUrl);
}

onRemove(resource){
  this.setState({
    resources:  this.props.resources.filter((elem)=>
         elem.title !== resource.title
      )
  })

}

  render(){

    return(<div>
            <Header />
            <ResourceForm onAdd={this.props.onAdd} validateParent={this.validData}  />
            <MyTable onRemoveParent={this.onRemove} data={this.props.resources}  /></div>)
}
}
export default Center;
