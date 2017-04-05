import React from 'react'

class ResourceForm extends React.Component{
constructor(props){
  super(props);

  this.changeTitle = this.changeTitle.bind(this)
  this.changeUrl = this.changeUrl.bind(this)
  this.state = {
    title:'',
    url:''
  }
}
changeTitle(ev){
  this.setState({
    title:ev.target.value
  })
}
changeUrl(ev){
  this.setState({
    url:ev.target.value
  })
}



render(){
  return(<div>
          <label>Name</label>
            <input onChange={this.changeTitle}></input>
          <label>url</label>
            <input onChange={this.changeUrl}></input><br />
            <button onClick={(ev)=>this.props.addResourceParent(this.state)}>add</button>
        </div>)
}

}

export default ResourceForm
