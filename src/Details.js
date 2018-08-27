import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router";

const petfinder = pf({
  key: process.env.API_Key,
  secret: process.env.API_Secret
});

class Details extends React.Component {
  // constructor(props) {
  //    super(props);
  //
  //    this.state = {
  //       loading: true
  //     };
  //  }

 // refactored way with babel. no longer need constructors 
  state = {
    loading: true
  };
   componentDidMount(){
     petfinder.pet
     .get({
       output: "full",
       id: this.props.id
     })
     .then(data => {
       let breed;
       if (Array.isArray(data.petfinder.pet.breeds.breed)) {
          breed = data.petfinder.pet.breeds.breed.join(", ");
        } else {
          breed = data.petfinder.pet.breeds.breed;
        }
        this.setState({
          name: data.petfinder.pet.name,
          animal: data.petfinder.pet.animal,
          location: `${data.petfinder.pet.contact.city},
          ${data.petfinder.pet.contact.state
          }`,
          description: data.petfinder.pet.description,
          media: data.petfinder.pet.media,
          breed,
          loading: false
        });
     })
     // .catch(err => this.setState({ error: err }));
     .catch(() => {
       navigate()
     })
   }

  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const { animal, breed, location, description } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
