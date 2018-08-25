import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import Character from './components/Character/Character';
import Inventory from './components/Inventory/Inventory';
import Navigation from './components/Navigation/Navigation';
import Spells from './components/Spells/Spells';
import World from './components/World/World';

const styles = {
  wrapper: {
    flexGrow: 1,
  },
};

const characterOverviewPages = [
  { path: '/inventory', name: 'Inventory', component: Inventory },
  { path: '/spells', name: 'Spells', component: Spells },
  { path: '/character', name: 'Character', component: Character },
  { path: '/world', name: 'World', component: World },
];

interface Props extends WithStyles<typeof styles> {}

export const CharacterOverview = ({ classes, location }: Props & RouteComponentProps<any>) => (
  <div className={classes.wrapper}>
    <Navigation pages={characterOverviewPages} selectedPath={location.pathname} />
    <Switch>
      {characterOverviewPages.map(page => (
        <Route path={page.path} key={page.path} component={page.component} />
      ))}
      <Redirect to={characterOverviewPages[0].path} />
    </Switch>
  </div>
);

export default withStyles(styles)(withRouter(CharacterOverview));
