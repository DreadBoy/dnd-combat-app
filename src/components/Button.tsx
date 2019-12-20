import {createUseStyles} from 'react-jss';
import React, {FC} from 'react';
import classNames from 'classnames';

type Props = {
    onClick?: () => void,
    className?: string,
}
const useStyles = createUseStyles({
    button: {
        background: 'white',
        border: '1px solid gray',
        borderRadius: 10,
        padding: 10,
        fontFamily: '\'PT Sans\', sans-serif',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        boxShadow: '1px 1px 1px black',
        cursor: 'pointer',
        outline: 'none'
    },
});

export const Button: FC<Props> = ({onClick, children, className}) => {
    const classes = useStyles();
    return (
        <button
            className={classNames(classes.button, className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
Button.defaultProps = {
    onClick: () => undefined,
};

