import {createUseStyles} from 'react-jss';
import React, {FC, useState} from 'react';
import {Card} from '../Select/Card';
import {Attack} from '../Attack/Attack';

const useStyles = createUseStyles({
    select: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
    },
});

export const Stages: FC = () => {
    const classes = useStyles();

    const [stage, setStage] = useState(0);

    if (stage === 0) {
        const setToOne = () => setStage(1);
        const colors = [
            'gold',
            'orange',
            'crimson',
            'lightseagreen',
        ];
        const cards = [
            '636238888310108665',
            '636306375308939571',
            '636312366325670491',
            '637115020139998917',
        ].map((id, index) => (
            <Card
                key={id}
                id={id}
                color={colors[index]}
                onClick={setToOne}
            />
        ));
        return (
            <div className={classes.select}>
                {cards}
            </div>
        );
    }
    if (stage === 1) {
        return (
            <Attack/>
        );
    }
    return null;
};
