import {createUseStyles} from 'react-jss';
import React, {FC, useCallback} from 'react';

type Props = {
    value: string,
    onValue?: (value: string) => void,
}

const useStyles = createUseStyles({
    input: {
        display: 'inline-block',
        height: 33,
        verticalAlign: 'bottom',
        minWidth: 49,
        marginLeft: 10,
        padding: '0 10px',
        borderRadius: 5,
        border: '1px solid lightgray',
        background: 'white',
        cursor: 'pointer',
    },
});

export const Input: FC<Props> = ({value, onValue}) => {
    const classes = useStyles();
    const onClick = useCallback(() => {
        onValue && onValue('');
    }, [onValue]);

    return (
        <div className={classes.input} onClick={onClick}>{value}</div>
    );
};
Input.defaultProps = {
    onValue: () => undefined,
};
