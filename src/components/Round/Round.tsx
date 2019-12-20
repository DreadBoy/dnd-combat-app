import {createUseStyles} from 'react-jss';
import React, {FC} from 'react';

const useStyles = createUseStyles({
    round: {
        width: '100vw',
        height: '100vh',
        padding: 20,
        background: 'seagreen',
    },
});

export const Round: FC = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.round}>
            {children}
        </div>
    );
};
