import React from "React";
import { ANIMALS } from 'petfinder-client';
import { Consumer } from "./SearchContext";

class SearchParams extends React.Component {
  render(){
    return (
      <Consumer>
        {/* this context is the state from App.js we can reference context.breed */}
        {context => (
          <div className="search-params">
            <label htmlFor="location">
              Location
            <input
              id="location"
              onChange={this.handleLocationChange}
              value={this.state.location}
              placeholder="location"
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.state.animal}
              onChange={this.handleAnimalChange}
              onBlur={this.handleAnimalChange}
            >
              <option/>
              {
                ANIMALS.map(animal => (
                  <option key={animal} value={animal}>{animal}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
             id="breed"
             value={this.state.breed}
             onChange={this.handleBreedChange}
             onBlur={this.handleBreedChange}
             disabled={!this.state.breeds.length === 0}
             >
            <option />
            {
              this.state.breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
              ))
            }
            </select>
          </label>
          <button onClick={this.props.search}>Submit</button>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchParams;
