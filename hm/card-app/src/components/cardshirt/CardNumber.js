import React from 'react';

const CardNumber = ({cardNumber}) => {
    const parentNumbers = [...cardNumber]
    const firstGroup = parentNumbers.slice(0,4)
    const secondGroup = parentNumbers.slice(4,8)
    const thirdCroup = parentNumbers.slice(8,12)
    const fourthGroup = parentNumbers.slice(12,16)

    return (
        <div className='card__shirt_number'>
            {firstGroup.length === 1 || firstGroup.length === 2 || firstGroup.length === 3 || firstGroup.length === 4  ? firstGroup[0]: 0}
            {firstGroup.length === 2 || firstGroup.length === 3 || firstGroup.length === 4  ? firstGroup[1]: 0}
            {firstGroup.length === 3 || firstGroup.length === 4  ? firstGroup[2]: 0}
            {firstGroup.length === 4 ? firstGroup[3]: 0}
            {' '}
            {secondGroup.length === 1 || secondGroup.length === 2 || secondGroup.length === 3 || secondGroup.length === 4 ? secondGroup[0] : 0}
            {secondGroup.length === 2 || secondGroup.length === 3 || secondGroup.length === 4 ?  secondGroup[1] : 0}
            {secondGroup.length === 3 || secondGroup.length === 4 ? secondGroup[2] : 0}
            {secondGroup.length === 4 ? secondGroup[3] : 0}
            {' '}
            {thirdCroup.length === 1 || thirdCroup.length === 2 || thirdCroup.length === 3 || thirdCroup.length === 4 ? thirdCroup[0]: 0}
            {thirdCroup.length === 2 || thirdCroup.length === 3 || thirdCroup.length === 4 ? thirdCroup[1]: 0}
            {thirdCroup.length === 3 || thirdCroup.length === 4 ? thirdCroup[2]: 0}
            {thirdCroup.length === 4 ? thirdCroup[3]: 0}
            {' '}
            {fourthGroup.length === 1 || fourthGroup.length === 2 || fourthGroup.length === 3 || fourthGroup.length === 4 ? fourthGroup[0] : 0}
            {fourthGroup.length === 2 || fourthGroup.length === 3 || fourthGroup.length === 4 ? fourthGroup[1] : 0}
            {fourthGroup.length === 3 || fourthGroup.length === 4 ? fourthGroup[2] : 0}
            {fourthGroup.length === 4 ? fourthGroup[3] : 0}
        </div>
    );
};

export default CardNumber;