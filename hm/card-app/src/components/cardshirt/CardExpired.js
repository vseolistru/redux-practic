import React from 'react';

const CardExpired = ({cardMonth, cardYear}) => {

    const arrayMonth = [...cardMonth]
    const arrayYear = [...cardYear]
    return (
        <span>
            {arrayMonth.length === 1 || arrayMonth.length ===2 ? arrayMonth[0]: 0}
            {arrayMonth.length === 2 ? arrayMonth[1]: 9}
            /
            {arrayYear.length === 1 || arrayYear.length === 2 ? arrayYear[0] : 0}
            {arrayYear.length === 2 ? arrayYear[1] : 0}
        </span>
    );
};

export default CardExpired;