import { Box, styled } from "@mui/material";

const BlocoNota = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '1px 1px 5px #D9D9D9',
    borderRadius: '25px',
    minHeight: '105px',
    width: '70%',
    maxWidth: '530px',
    overflow: 'hidden',
    backgroundColor:'#FFFFFF'
}));


function Note() {
    return (
        <BlocoNota>

        </BlocoNota>
    )
}


export default Note;