import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import RegisterationTab from './RegisterationTab';
import AccountDetails from './AccountDetails';
import WorkIcon from '@material-ui/icons/Work';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import '../css/Menu.css';


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#ffff4d',
    color: '#4d4d4d',
  },
  payment: {
    margin: theme.spacing(1),
    width: '32%',
    padding: '1%'
  },
  root: {
    position: 'absolute',
    display: 'block',
    zIndex: 110,
    outline: 'none !important',
    color: 'white',
    width: '64px',
    height: '64px',
    display: 'block',
    cursor: 'pointer',
    position: 'absolute',
    top: '0.8em',
    right: '4.50em',
    borderRadius: '50%',
    pointerEvents: 'auto',
  },
  button: {
      outline: 'none !important',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new items in cart" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Payments</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <SettingsIcon/>
        </IconButton>
        <p>Manage Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <ThemeProvider theme={darkTheme}> 
      <IconButton className={classes.root} onClick={handleClickOpen} aria-label="profile">
        <AccountCircleIcon style={{ fontSize: 70}}/>
      </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.button} edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Welcome Ambika
            </Typography>
            <div className={classes.sectionDesktop}>
            <IconButton className={classes.button} aria-label="show 4 new items in cart" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="manage account settings"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleProfileMenuOpen}
              className={classes.button}
            >
              <SettingsIcon />
            </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <AccountDetails />
        <div>
        <Button
        variant="contained"
        color="secondary"
        className={classes.payment}
        startIcon={<WorkIcon />}
      >
      Workshops payment
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.payment}
        startIcon={<EmojiFlagsIcon />}
      >
      Flagships payment
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.payment}
        startIcon={<EmojiEventsIcon />}
      >
      Mini-events payment
      </Button>
      </div>
        <RegisterationTab />
        {/*<List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>*/}
      </Dialog>
      </ThemeProvider>
    </div>
  );
}