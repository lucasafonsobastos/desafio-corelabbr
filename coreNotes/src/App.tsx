import { Box } from '@mui/material';
import Header from './components/Header';
import Conteiner from '@mui/material/Container';
import NewNote from './components/NewNote';

function App() {

  return (
    <>
      <Conteiner maxWidth='sm'>
        <Header></Header>
        <Box sx={{
          marginTop: '5rem',
          display: 'flex' , 
          alignContent: 'center', 
          justifyContent: 'center'}}>
          <NewNote></NewNote>
        </Box>
      </Conteiner>
    </>
  )
}

export default App;
