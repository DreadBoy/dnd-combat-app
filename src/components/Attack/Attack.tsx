import {createUseStyles} from 'react-jss';
import React, {FC, useState} from 'react';
import {H1} from './H1';
import {Input} from '../Input';
import {Button} from '../Button';
import {Keyboard} from '../Keyboard';

const useStyles = createUseStyles({
    attack: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    done: {
        width: 200,
    }
});

export const Attack: FC = () => {
    const classes = useStyles();

    const [attackRoll, setAttackRoll] = useState('');

    return (
        <div className={classes.attack}>
            <H1>Attacking the Demogorgon!</H1>
            <h2>
                Roll the attack roll:
                <Input value={attackRoll} onValue={setAttackRoll}/>
            </h2>
            <Button className={classes.done}>Done</Button>
            <Keyboard onKey={(key) => setAttackRoll(attackRoll + key)}/>
        </div>
    );
};
