import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../App';

const Rick = {
  results: [ 
      { 
id:1,
name: "Rick Sanchez",
status:"Alive",
species:"Human",
type:"",
gender:"Male"
      },
  ],
};

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character',(req, res, ctx) => res(ctx.json(Rick))
    ),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should render Rick Sanchez', async () => {
    render(<App />)

    const loading = screen.getByText(/loading/i);
    const characterName = await screen.findByText('Rick Sanchez');
    expect(characterName).toBeInTheDocument();
    screen.debug();

})

// test('should render orderList', async () => {
//     const Morty = {('https://rickandmortyapi.com/api/character')

//     }
// })

