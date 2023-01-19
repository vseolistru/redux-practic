import React from 'react';

const CompeteCard = ({userCard}) => {
    return (
        <>
            <div className='card__shirt'>
                <div className='card__shirt_number'>{userCard.cardNumber}</div>
                <div className='card__shirt_holder'>
                    {userCard.cardHolder}
                    <span>
                        {userCard.cardMonth}/{userCard.cardYear}
                    </span>
                </div>
                <div className='card__circle_decoration'/>
                <div className='card__circle_min_decoration'/>
            </div>
            <div className="card__outer">
                <p>{userCard.cardCvc}</p>
            </div>
        </>
    );
};

export default CompeteCard;