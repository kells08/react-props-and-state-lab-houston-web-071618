import React, { Component } from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'


// App State:
//    Selected Filter
//    Pets

// Filters State:
// (nothing)

// Pet Browser State:
//    Adopted

// Pet State:
// (nothing)

class App extends Component {

  state = {
    pets: [],
    selectedFilter: null
  }

  componentDidMount(){
    fetch('/api/pets')
      .then(resp => resp.json())
      .then( pets => {
        this.setState({ pets:pets })
      })
  }

  adoptPet = (petID) => {
    this.setState( state => {
      //console.log(pets)
      let pet = (this.state.pets.find( pet => { return pet.id == petID}))
      pet.isAdopted = true
      return state
    })
  }
    
  render() {
    //console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div>
          <Filters />
          <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
        </div>
      </div>
    )
  }


}


export default App