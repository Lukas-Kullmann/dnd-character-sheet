import { Theme } from '@material-ui/core';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Tab from '@material-ui/core/Tab/Tab';
import Tabs from '@material-ui/core/Tabs/Tabs';
import React from 'react';

const styles = (theme: Theme) => ({
  tabsRoot: {
    borderBottom: '1px solid ' + lighten(theme.palette.text.primary, 0.8),
  },
  wrapper: {
    flexGrow: 1,
  },
});

interface Props extends WithStyles<typeof styles> {}

export const CharacterOverview = ({ classes }: Props) => (
  <div className={classes.wrapper}>
    <Tabs value={0} classes={{ root: classes.tabsRoot }}>
      <Tab label="Inventory" />
      <Tab label="Spells" />
      <Tab label="Character" />
      <Tab label="World" />
    </Tabs>
  </div>
);

export default withStyles(styles)(CharacterOverview);
