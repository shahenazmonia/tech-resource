import React from 'react'
import Header from './header.jsx'
import ResourceForm from './resourceForm.jsx'
import MyTable from './myTable.jsx'
import store from './reduxes.js'



 class Center extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      resources:[],
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
  this.setState({

      resources:this.props.resources.concat(formState)
  })

}
validData(titleUrl){
  (titleUrl.title === '' || titleUrl.url ==='')
  ?alert('Bad Data!') : this.addResource(titleUrl);
}

onRemove(resource){
  console.log("onRemove",this.props.resources);
  this.setState({
    resources:  this.props.resources.filter((elem)=>{
      console.log(elem.title , resource.title,elem.title !== resource.title);
           return(elem.title !== resource.title)
    }

      )
  })

}

  render(){

    return(<div>
            <Header />
            <ResourceForm onAdd={this.props.onAdd} validateParent={this.validData}  />
            <MyTable onRemoveParent={this.props.onRemove} data={this.props.resources} /></div>)
}
}
export default Center;
