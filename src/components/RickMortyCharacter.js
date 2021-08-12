import React from "react";

const RickMortyCharacter = (props) => {
  const {
    name,
    origin: { name: planet },
    species,
    image,
  } = props;
  console.log(name);
  return (
    <div className="character-card">
      <div className="character__name">
        <p>{name}</p>
      </div>
      <div className="character__image">
        <img src={image} alt={name} />
      </div>
      <div className="character__meta">
        <p>{species}</p> <p>{planet}</p>
      </div>
    </div>
  );
};

export default RickMortyCharacter;
