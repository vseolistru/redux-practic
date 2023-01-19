import React from 'react';

const CardCvc = ({cardCvc}) => {
    const arrayCvc = [...cardCvc]
    return (
        <p>
            {arrayCvc.length === 1 || arrayCvc.length === 2 || arrayCvc.length === 3 ? arrayCvc[0] : 0}
            {arrayCvc.length === 2 || arrayCvc.length === 3 ? arrayCvc[1] : 0}
            {arrayCvc.length === 3 ? arrayCvc[2] : 0}
        </p>
    );
};

export default CardCvc;