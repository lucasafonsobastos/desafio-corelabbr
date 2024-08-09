import { Box } from '@mui/material';
import Header from './components/Header';
import Conteiner from '@mui/material/Container';
import NewNote from './components/NewNote';
import Holding from './components/Holding';

function App() {

  return (
    <Conteiner maxWidth='lg' sx={{
      backgroundColor:'#F0F2F5', 
      height:'100vh',
      width:'100vw',
      }}>
      <Header></Header>

      <Box sx={{
        marginTop: '5rem',
        display: 'flex' , 
        alignContent: 'center', 
        justifyContent: 'center'}}>
        <NewNote></NewNote>
      </Box>

      <Holding></Holding>
    </Conteiner>
  )
}

export default App;
