import { alpha, AppBar, Box, InputBase, styled, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Logo = styled('img')(() => ({
    width: '1.6rem'
}));

const Search = styled('div')(({ theme }) =>({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    borderRadius: '4px',
    padding: '0 5px',
    ':hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.3),
    },
}));

const SearchInputStyled = styled(InputBase)(() => ({
    color: 'inherit',
    backgroundColor: 'transparent',
  }));


function Header() {
    return (  
        <>
            <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                alignContent: 'space-between',
                backgroundColor: '#FFFFFF'}}>
                <AppBar sx={{
                    backgroundColor: 'white'
                }}>
                    <Toolbar>
                        <Logo src="/img/icone.png"></Logo>
                        <Typography
                        variant="body2"
                        noWrap
                        component="div"
                        padding={'1rem'}
                        >
                            CoreNotes
                        </Typography>
                        <Search>
                            <SearchInputStyled
                                placeholder="Pesquisar notas..."
                                sx={{fontSize: 'small'}}
                                >
                            </SearchInputStyled>

                            <SearchIcon sx={{backgroundColor: 'transparent'}}/>
                        </Search>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;