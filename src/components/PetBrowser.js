import React, { Component } from 'react'
import Pet from './Pet'

class PetBrowser extends Component {
  
  adoptPet = (test) => {
    this.setState({adopted: true})
  }

  render() {
    const pets = this.props.pets
    //console.log(pets)
    return (
      <div>
        {pets.map(pet => {
          return (
          <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
          )
        })}
      </div>
    )
  }
}

export default PetBrowser