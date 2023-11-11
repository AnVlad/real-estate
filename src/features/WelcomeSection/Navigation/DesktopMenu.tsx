import { Box, Button } from '@mui/material';

interface MenuProps {
  menuList: string[];
  handleClick: (value: string) => () => void;
}

const DesktopMenu = ({ menuList, handleClick }: MenuProps) => {
  return (
    <Box sx={{ flex: 2 }}>
      {menuList.map((page) => {
        return (
          <Button
            aria-label={`go to the ${page} part of the page`}
            key={page}
            color='white'
            value={page}
            onClick={handleClick(page)}
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
  );
};

export default DesktopMenu;
