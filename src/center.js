import React from 'react'
import Header from './header.js'
import ResourceForm from './resourceForm.js'
import MyTable from './myTable.js'
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

  this.setState({
      resources:this.state.resources.concat(formState)
  })
}
validData(titleUrl){
  (titleUrl.title === '' || titleUrl.url ==='')
  ?alert('Bad Data!') : this.addResource(titleUrl);

}
onRemove(resource){
  this.setState({
    resources:  this.state.resources.filter((elem)=>{
      console.log(elem);
        return (elem.title !== resource.title)
      })
  })
}

  render(){

    return(<div>
            <Header />
            <ResourceForm validateParent={this.validData} key={this.state.resources.length}/>
            <MyTable data={this.state.resources} onRemoveParent={this.onRemove} key={this.state.resources.length+100000} /></div>)
}
}
export default Center;
