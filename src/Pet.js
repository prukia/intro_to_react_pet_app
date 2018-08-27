import React from 'react';
import { Link } from "@reach/router";

class Pet extends React.Component {
  // every react class MUST have a render method
  // can't call setState in render
  render(){
    const { name, animal, breed, media, location, id } = this.props;

    let photos = []
    if(media && media.photos && media.photos.photo){
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    return(
      <Link to={`/details/${id}`} className="pet">
        <div to={`/details/${id}`} className="image-container">
          {photos[0] && <img src={photos[0].value} alt={name} />}
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
          {animal} — {breed} — {location}
          </h2>
        </div>
      </Link>
    )
  }
}

export default Pet;
