import { Search } from "@mui/icons-material";
import { AppBar, Box, InputBase, styled, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
}));

const SearchInputStyled = styled(InputBase)((theme) => ({
    color: 'inherit',
    width: '100%',
  }));



function Header() {
    return (  
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar>
                        <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            CoreNotes
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <SearchInputStyled
                            placeholder="Search…"
                            >
                            </SearchInputStyled>
                        </Search>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;