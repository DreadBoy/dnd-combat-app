import {createUseStyles} from 'react-jss';
import React, {FC} from 'react';

type Props = {
    id: string;
    color?: string;
    onClick?: () => void;
}

const useStyles = createUseStyles({
    card: {
        padding: 10,
        borderRadius: 10,

        width: 'calc(25% - 10px)',
        height: '100%',

    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center center'
    },
});

export const Card: FC<Props> = ({id, color, onClick}) => {
    const classes = useStyles();
    const image = require(`./${id}.jpg`);
    return (
        <div className={classes.card} style={{background: color}} onClick={onClick}>
            <img src={image} alt={id} className={classes.image}/>
        </div>
    );
};
Card.defaultProps = {
    color: 'white',
    onClick: () => undefined,
};
