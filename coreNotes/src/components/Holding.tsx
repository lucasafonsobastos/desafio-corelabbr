import { Container, Typography } from "@mui/material";
import Note from "./Note";


function Holding() {
    return (
        <Container maxWidth='lg'>
            <Typography>Favoritas</Typography>
            <div>
                <Note></Note>
            </div>

        </Container>
    )
}


export default Holding;