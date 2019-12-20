import {createUseStyles} from 'react-jss';
import React, {FC, useCallback, useRef, useState} from 'react';
import {Stages} from './components/Round/Stages';
import {Round} from './components/Round/Round';
import {Button} from './components/Button';

const useStyles = createUseStyles({
    app: {
        width: '100vw',
        height: '100vh',
    },
    '@global': {
        '*': {
            boxSizing: 'border-box',
        },
        body: {
            margin: 0,
            fontFamily: '\'PT Sans\', sans-serif',
        },
    },
});

export const App: FC = () => {
    const classes = useStyles();

    const [full, setFull] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const action = useCallback(() => {
        if (ref.current)
            ref.current.requestFullscreen()
                .then(() => setFull(true));
    }, []);
    return (
        <div className={classes.app} ref={ref}>
            <Round>
                {full ? (
                    <Stages/>
                ) : (
                    <Button onClick={action}>Set fullscreen</Button>
                )}
            </Round>
        </div>
    );
};
