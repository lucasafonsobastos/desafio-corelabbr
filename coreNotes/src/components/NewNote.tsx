import * as React from "react";
import { Box, InputBase, InputLabel, styled } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const EditNota = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '1px 1px 5px #D9D9D9',
    borderRadius: '25px',
    minHeight: '105px',
    width: '100%',
    maxWidth: '530px',
    overflow: 'hidden',
}));

const Line = styled('span')(() => ({
    width: '100%',
    height: '2px',
    backgroundColor: 'rgba(0,0,0, 0.2)',
}));

const BtFavorite = styled('div')(() => ({

}));



function NewNote(){

    const [favorite, setFavorite] = React.useState<null | HTMLElement>(false);

    const handleFavorite = (event: React.MouseEvent<null | HTMLElement>) => {
        setFavorite(true);
    }

    const isFavorite = () => {
        if(favorite){
            return (<StarIcon></StarIcon>)
            
        } else {
            return (<StarBorderIcon></StarBorderIcon>)
        }
    }

    return (
        <>
            <EditNota>
                <Box sx={{
                    display: 'flex', alignItems: 'center', padding: '.2rem 1rem', justifyContent: 'space-between'
                }}>
                    <InputLabel sx={{ fontWeight:'bold', fontSize: 'smaller'}}>Título</InputLabel>
                    <InputBase sx={{
                        padding: '0 1rem',
                    }}>
                    </InputBase>
                    <BtFavorite onClick={handleFavorite}>
                        {isFavorite()}
                    </BtFavorite>
                </Box>
                <Line></Line>
                <Box>
                    <InputBase multiline placeholder="criar nota..." sx={{
                        padding: '0.5rem 1rem', fontSize: 'smaller', width: '100%',
                    }}>
                    </InputBase>
                </Box>
            </EditNota>
        </>
    )
}

export default NewNote;