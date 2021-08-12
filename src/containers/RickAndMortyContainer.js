import React from "react";
import { useQuery } from "@apollo/react-hooks";
import RickMortyCharacter from "../components/RickMortyCharacter";
import { GET_CHARACTERS } from "../graphql/get-characters";
const RickAndMortyContainer = () => {
  const { data } = useQuery(GET_CHARACTERS, {
    variables: { first: 9 },
  });
  let characters;
  if (data) {
    const {
      characters: { results },
    } = data;
    characters = results;
  }
  console.log(characters);
  return (
    <div className="container">
      {characters &&
        characters.map((character) => (
          <RickMortyCharacter key={character.id} {...character} />
        ))}
    </div>
  );
};

export default RickAndMortyContainer;
