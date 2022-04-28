import React, { useEffect, useState } from 'react';
import {fetchApi } from '../services/fetch';

export default function Main() {
    const [characters, setCharacters] = useState([]);


  useEffect(() => {
    const data = async () => {
      const info = await fetchApi();
      console.log(characters);
      setCharacters(info); 
    };

    data();

  }, []);


  return (
  <div>
  <h1>Character</h1>
  {characters.map((character) => ( 
      <div key={character.id}>
      <h2>{character.name}</h2>
      <h3>{character.status}</h3>
      <h4>{character.species}</h4>
      <h5>{character.type}</h5>
      </div>
    
  ))}
  </div>
  );
}
