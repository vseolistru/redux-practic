import React from 'react';
import iconComplete from '../assets/icon-complete.svg'

const CardComplete = () => {
    return (
        <>
            <div className='card__left_side'></div>

            <form className='card__card_form'>
                <img src={iconComplete} alt={iconComplete}/>
                <div className='card__form_date_expired'>
                    <p>
                        Thank You!
                    </p>
                    <span>We`ve added your card details</span>
                    <button>Continue</button>
                </div>
            </form>
            <div className='card__shirt'>
                <div className='card__shirt_number'>0000 0000 0000 0000</div>
                <div className='card__shirt_holder'>
                    Holder Name <span>09/00</span>
                </div>
                <div className='card__circle_decoration'/>
                <div className='card__circle_min_decoration'/>
            </div>
            <div className="card__outer">
                <p>000</p>
            </div>

        </>
    );
};

export default CardComplete;