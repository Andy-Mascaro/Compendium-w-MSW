import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

const Beebo = {
    results: [ 
        { 
    id: 2,
    name: "Beebo",
    status: "Dead",
    species: "Alien",
    type: "",
    gender: "Male",
        },
    ],
  };

  describe('test 2', () => {
  it('Should render Beebo', async () => {
    render(<App />)
await waitFor(async () => {
        userEvent.selectOptions(screen.getByRole('combobox'), 'Dead');
        server.use(rest.get(`https://rickandmortyapi.com/api/character`, (req, res, ctx) => res(ctx.json(Beebo))
        )
    );
    const name = await screen.findByText('Beebo');
    expect(name).toBeInTheDocument();
    screen.debug();
    },
    { timeout: 3000 }
    )
  });
});

