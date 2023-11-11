import { useState, KeyboardEvent, MouseEvent } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

interface MenuProps {
  menuList: string[];
  handleClick: (value: string) => () => void;
}

const MobileMenu = ({ menuList, handleClick }: MenuProps) => {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  return (
    <>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{
          mr: 2,
          display: {
            xs: 'block',
            sm: 'none',
          },
        }}
        onClick={(event) => toggleDrawer(true)(event)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor={'top'} open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 'auto' }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}>
          <List>
            {menuList.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={handleClick(text)}>
                  <ListItemText
                    primary={
                      <Typography
                        color={'ButtonText'}
                        sx={{
                          fontSize: '2rem',
                          fontWeight: 800,
                          lineHeight: 1,
                          textTransform: 'uppercase',
                        }}>
                        {text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
