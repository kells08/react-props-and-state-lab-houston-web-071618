import React, { Component } from 'react'

class Pet extends Component {
  
  handleClick = (e) => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render(){
    //console.log(this.props)
    return(
      <div className="card">
        <h4>{this.props.pet.name}</h4>
        Gender: {this.props.pet.gender === 'female' ? '♀' : '♂'}, 
        Weight: {this.props.pet.weight},
        Age: {this.props.pet.age}, 
        Type: {this.props.pet.type},  
        Adopted: {this.props.pet.isAdopted ? 'Adopted' : 'Not Adopted'}<br/>
        <button onClick={this.handleClick} value={this.props.pet.isAdopted}>Adopt Me!</button>
        <br/><br/><br/>
      </div>
    )
  }
  
}

export default Pet