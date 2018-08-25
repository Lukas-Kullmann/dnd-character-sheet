import withStyles, { CSSProperties, WithStyles } from '@material-ui/core/styles/withStyles';
import React, { Component } from 'react';
import AbilityScores from './components/AbilityScores/AbilityScores';
import Header from './components/Header/Header';

const styles = {
  body: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  } as CSSProperties,
};

interface Props extends WithStyles<typeof styles> {}

class App extends Component<Props> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.body}>
          <AbilityScores str={13} dex={11} con={16} int={13} wis={13} cha={18} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
