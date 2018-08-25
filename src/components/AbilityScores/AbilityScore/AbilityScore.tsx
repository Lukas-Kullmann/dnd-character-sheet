import { Theme } from '@material-ui/core';
import Badge from '@material-ui/core/Badge/Badge';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import withStyles, { CSSProperties, WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';

const styles = (theme: Theme) => ({
  modifier: {
    right: 'calc(0.2929 * 5vh - 11px)',
    top: 'calc(0.2929 * 5vh - 11px)',
  },
  name: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: '3px',
    bottom: '-0.7em',
    fontSize: '0.8em',
    position: 'absolute',
    textAlign: 'center',
    width: '10vh',
  } as CSSProperties,
  score: {
    fontSize: '1.5em',
  },
  wrapper: {
    alignItems: 'center',
    border: '1px solid ' + lighten(theme.palette.text.primary, 0.3),
    borderRadius: '50%',
    height: '10vh',
    justifyContent: 'center',
    position: 'relative',
    width: '10vh',
  } as CSSProperties,
});

interface Props extends WithStyles<typeof styles> {
  name: string;
  score: number;
}

export const AbilityScore = ({ classes, name, score }: Props) => {
  const modifier = Math.floor((score - 10) / 2);

  return (
    <Badge
      badgeContent={modifier}
      color="primary"
      component="li"
      classes={{ root: classes.wrapper, badge: classes.modifier }}
    >
      <Typography variant="body2" className={classes.name}>
        {name}
      </Typography>
      <Typography variant="body1" className={classes.score}>
        {score}
      </Typography>
    </Badge>
  );
};

export default withStyles(styles)(AbilityScore);
