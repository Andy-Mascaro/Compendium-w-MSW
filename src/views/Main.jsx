import React, { useEffect, useState } from 'react';
import { fetchApi } from '../services/fetch';
import OrderList from '../components/Order';


export default function Main() {
    const [characters, setCharacters] = useState([]);
    const [order, setOrder] = useState('Alive');
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    const data = async () => {
      const info = await fetchApi(order);
      setCharacters(info); 
      setLoading(false);
    };

    data();
  }, [order]);

  if (loading) return <div className='loader'>...loading</div>;

  return (
  <div>
  <div>
  <OrderList 
    setOrder={setOrder}

  />
  </div>
  <h1>Rick And Morty</h1>
  
  {characters.map((character) => ( 
      <div key={character.id}>
      <h2>{character.name}</h2>
      <h3>{character.status}</h3>
      <h4>{character.species}</h4>
      <h5>{character.type}</h5>
      <h5>{character.gender}</h5>
      </div>
    
  ))}
  </div>
  );
}
