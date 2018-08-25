import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button/Button';
import IconButton from '@material-ui/core/IconButton/IconButton';
import withStyles, { CSSProperties, WithStyles } from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const styles = {
  flex: {
    flex: 1,
    textAlign: 'left',
  } as CSSProperties,
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

interface Props extends WithStyles<typeof styles> {}

export const Header = ({ classes }: Props) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" className={classes.flex}>
        DnD Character tools
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
