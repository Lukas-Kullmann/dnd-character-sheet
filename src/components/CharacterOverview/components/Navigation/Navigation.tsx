import { Theme } from '@material-ui/core';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Tab, { TabProps } from '@material-ui/core/Tab/Tab';
import Tabs from '@material-ui/core/Tabs/Tabs';
import React, { Component } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const styles = (theme: Theme) => ({
  tabsRoot: {
    borderBottom: '1px solid ' + lighten(theme.palette.text.primary, 0.8),
  },
});

const TabLink = ({ to, ...props }: TabProps & { to: string }) => {
  const component = (linkProps: LinkProps) => <Link {...linkProps} to={to} />;

  return <Tab {...props} component={component} />;
};

interface Props extends WithStyles<typeof styles> {
  pages: Array<{ path: string; name: string }>;
  selectedPath: string;
}

interface State {
  selectedTab: number;
}

export class Navigation extends Component<Props, State> {
  public static getDerivedStateFromProps(props: Props, state: State): State {
    let selectedTab = 0;

    props.pages.forEach((page, index) => {
      if (page.path === props.selectedPath) {
        selectedTab = index;
      }
    });

    return { ...state, selectedTab };
  }

  public state = {
    selectedTab: 0,
  };

  public render() {
    const { classes, pages } = this.props;
    const { selectedTab } = this.state;

    return (
      <Tabs value={selectedTab} classes={{ root: classes.tabsRoot }}>
        {pages.map(page => (
          <TabLink key={page.path} label={page.name} to={page.path} />
        ))}
      </Tabs>
    );
  }
}

export default withStyles(styles)(Navigation);
