import React from 'react';
import pf from "petfinder-client";
import Pet from "./Pet";


const petfinder = pf({
  key: process.env.API_Key,
  secret: process.env.API_Secret
})

class Results extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  componentDidMount(){
    petfinder.pet
    .find({
      output: "full",
      location: "Minneapolis, MN"
    })
    .then(data => {
      let pets;
      if (data.petfinder.pets && data.petfinder.pets.pet){
        if (Array.isArray(data.petfinder.pets.pet)){
          pets = data.petfinder.pets.pet;
        } else {
          pets = [data.petfinder.pets.pet] //just 1 animal wrap in array
        }
      } else {
        pets = [] //if you find nothing make pets an empty array
      }
      this.setState({
        // pets: pets (same as below line)
        pets
      });
    });
  }
  render() {
    return (
        <div className="search">
          {this.state.pets.map(pet => {

            let breed;

            if (Array.isArray(pet.breeds.breed)){
              breed = pet.breeds.breed.join(", ")
            } else {
              breed = pet.breeds.breed;
            }
            return(
              <Pet
                animal={pet.animal}
                key={pet.id}
                name={pet.name}
                breed={breed}
                media={pet.media}
                location={ `${pet.contact.city}, ${pet.contact.state}` }
              />
            )
          })}
        </div>
    )
  }
}
export default Results;
