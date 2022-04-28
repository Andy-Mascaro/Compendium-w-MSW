export async function fetchApi() {
    const resp = await fetch('https://rickandmortyapi.com/api/character');
    const info = await resp.json();
    return info.results;
  }
  
