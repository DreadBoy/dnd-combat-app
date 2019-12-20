import {createUseStyles} from 'react-jss';
import React, {FC} from 'react';

const useStyles = createUseStyles({
    h1: {
        textAlign: 'center',
    },
});

export const H1: FC = ({children}) => {
  const classes = useStyles();
  return (
    <h1 className={classes.h1}>{children}</h1>
  );
};
