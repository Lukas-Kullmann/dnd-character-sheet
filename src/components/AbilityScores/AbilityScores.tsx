import withStyles, { CSSProperties, WithStyles } from '@material-ui/core/styles/withStyles';
import React from 'react';
import AbilityScore from './AbilityScore/AbilityScore';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    listStyleType: 'none',
    margin: 0,
    padding: '0 20px',
  } as CSSProperties,
};

interface Props extends WithStyles<typeof styles> {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export const AbilityScores = ({ str, dex, con, int, wis, cha, classes }: Props) => (
  <ul className={classes.wrapper}>
    <AbilityScore name="Strength" score={str} />
    <AbilityScore name="Dexterity" score={dex} />
    <AbilityScore name="Constitution" score={con} />
    <AbilityScore name="Intelligence" score={int} />
    <AbilityScore name="Wisdom" score={wis} />
    <AbilityScore name="Charisma" score={cha} />
  </ul>
);

export default withStyles(styles)(AbilityScores);
