import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MTable from './MTable';

const useStylesButton = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

function showValue(e:any) {
  const value = e.currentTarget.value;
  console.log(value);
  return (
    <div>
      <MTable menuUrl={value} />
    </div>
  );
}

export default function TextButtons() {
  const classes = useStylesButton();

  return (
    <div className={classes.root}>
      <Button color="secondary" value="http://localhost:5000/basic" onClick={e => showValue(e)}>ALL</Button>
      <Button value="http://localhost:5000/basic/korean" onClick={e => showValue(e)}>Korean</Button>
      <Button value="http://localhost:5000/basic/west" onClick={e => showValue(e)}>West</Button>
      <Button value="http://localhost:5000/basic/chinese" onClick={e => showValue(e)}>Chinese</Button>
      <Button value="http://localhost:5000/basic/japanese" onClick={e => showValue(e)}>Japanese</Button>
      <Button value="http://localhost:5000/basic/mexican" onClick={e => showValue(e)}>Mexican</Button>
      <Button value="http://localhost:5000/basic/dessert" onClick={e => showValue(e)}>Dessert</Button>
    </div>
  );
}