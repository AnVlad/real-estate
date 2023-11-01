import { AppBar, Box, Button, Grid } from '@mui/material';
import DomainIcon from '@mui/icons-material/Domain';
// import { CSSProperties } from '@mui/material/styles/createMixins';

const Navbar = () => {
  const pages = ['home', 'projects', 'interiors', 'territory', 'listing'];
  return (
    <AppBar color='transparent' position='static' elevation={0}>
      <Grid container>
        <Grid item xs={3}>
          <DomainIcon color='white' sx={{ my: 2 }} />
        </Grid>
        <Grid item xs={7}>
          <Box>
            {pages.map((page) => {
              return (
                <Button
                  key={page}
                  color='white'
                  disableRipple
                  sx={{
                    my: 2,
                    display: 'block',
                    textAlign: 'start',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                  }}>
                  {page}
                </Button>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant='outlined'
            color='white'
            sx={{
              my: 2,
              padding: '1.2rem 2rem',
              lineHeight: 1.2,
              borderRadius: '100px',
            }}>
            Let's talk
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
