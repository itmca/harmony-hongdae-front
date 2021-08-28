import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button color="secondary">ALL</Button>
      <Button>Korean</Button>
      <Button>West</Button>
      <Button>Chinese</Button>
      <Button>Japanese</Button>
      <Button>Mexican</Button>
      <Button>Dessert</Button>
    </div>
  );
}