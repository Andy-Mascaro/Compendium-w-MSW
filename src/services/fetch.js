export async function fetchApi(setOrder) {
  const people = new URLSearchParams();
  people.set('status', setOrder);
    const resp = await fetch(
      `https://rickandmortyapi.com/api/character?${people.toString()}`
    );
    const info = await resp.json(); 
    return info.results;
  }
  
