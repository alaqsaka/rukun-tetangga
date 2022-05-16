/* eslint-disable no-unused-vars */
import {
  AppBar,
  Link,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  Typography,
  Avatar,
  Button
} from '@mui/material';
import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

const Header = (props) => {
  const classes = useStyles();
  const links = [
    {
      id: 1,
      route: 'About',
      url: '/about'
    },
    { id: 2, route: 'Kegiatan', url: '/kegiatan' }
  ];

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((link) => (
          <ListItem button key={link.id}>
            <Link href={link.url} underline="none">
              <ListItemText primary={link.route} />
            </Link>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText>
            <UserAuth />
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  const user = false;

  const UserAuth = () => {
    return (
      <div>
        {user ? (
          // if user logged in
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt="" src="">
              {/* {user.result.name.charAt(0)} */}A
            </Avatar>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Link underline="none">
              <Button href="/auth" underline="none" variant="contained">
                Sign In
              </Button>
            </Link>
          </>
        )}
      </div>
    );
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ marginBottom: '70px' }}>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolBar}>
            <Link href="/" underline="none">
              <a className={classes.logo}>Rukun Tetangga</a>
            </Link>

            {matches ? (
              <Box>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer('right', true)}
                >
                  <MenuIcon className={classes.menuIcon} fontSize="" />
                </IconButton>

                <Drawer
                  anchor="right"
                  open={state['right']}
                  onClose={toggleDrawer('right', false)}
                >
                  {list('right')}
                </Drawer>
              </Box>
            ) : (
              <>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexGrow: '0.1'
                  }}
                >
                  {links.map((link) => (
                    <Link
                      href={link.url}
                      underline="none"
                      key={link.id}
                      className={classes.link}
                    >
                      {link.route}
                    </Link>
                  ))}
                </Box>
                <Link underline="none">
                  <UserAuth />
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

export default Header;
