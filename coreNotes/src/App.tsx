import { Box } from '@mui/material';
import Header from './components/Header';
import Conteiner from '@mui/material/Container';
import NewNote from './components/NewNote';
import Holding from './components/Holding';

import { NotasProvider } from './components/NotasContext';

function App() {

    return (
        <Conteiner maxWidth='lg' sx={{
        backgroundColor:'#F0F2F5', 
        height:'100vh',
        width:'100vw',
        }}>
            <NotasProvider>
                <Header></Header>
                <Holding></Holding>
            </NotasProvider>
        
        </Conteiner>
    )
}

export default App;
