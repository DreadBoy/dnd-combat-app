import {createUseStyles} from 'react-jss';
import React, {FC} from 'react';
import {Button} from './Button';

type Props = {
    onKey?: (key: number) => void,
}

const useStyles = createUseStyles({
    keyboard: {
        display: 'grid',
        gridGap: 10,
        gridTemplateColumns: 'repeat(5, 1fr)',
        background: 'lightgray',
        borderRadius: 10,
        padding: 10,
    },
});

export const Keyboard: FC<Props> = ({onKey}) => {
    const classes = useStyles();
    return (
        <div className={classes.keyboard}>
            {new Array(10).fill(0).map((_, index) => (
                <Button
                    key={index}
                    onClick={() => onKey && onKey(index)}
                >
                    {index}
                </Button>
            ))}
        </div>
    );
};
Keyboard.defaultProps = {
    onKey: () => undefined,
};
