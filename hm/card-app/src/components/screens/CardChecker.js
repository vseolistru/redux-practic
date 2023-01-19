import React, { useState} from 'react';
import CardNumber from "../cardshirt/CardNumber";
import CardName from "../cardInputs/CardName";
import HolderNumber from "../cardInputs/HolderNumber";
import CardDateCvc from "../cardInputs/CardDateCvc";
import CardExpired from "../cardshirt/CardExpired";
import CardCvc from "../cardshirt/CardCvc";


const CardChecker = ({getCardData}) => {
    const [cardHolder, setHolder] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardMonth, setMonth] = useState('')
    const [cardYear, setYear] = useState('')
    const [cardCvc, setCvc] = useState('')

    return (
        <>
            <div className='card__left_side'></div>
            <form className='card__card_form'>
                <CardName setHolder={setHolder}/>
                <HolderNumber setCardNumber={setCardNumber}/>
                <div className='card__form_date_expired'>
                    <label>
                        Exp. Date (MM/YY) <span>CVC</span>
                    </label>
                    <CardDateCvc setMonth={setMonth} setYear={setYear} setCvc={setCvc}/>
                    <button
                        onClick={(e) => getCardData(cardHolder, cardNumber, cardMonth, cardYear, cardCvc, e)}
                    >
                        Confirm
                    </button>
                </div>
            </form>
            <div className='card__shirt'>
                <CardNumber cardNumber={cardNumber}/>
                <div className='card__shirt_holder'>
                    {cardHolder ? cardHolder : 'Holder Name'}
                    <CardExpired cardYear={cardYear} cardMonth={cardMonth}/>
                </div>
                <div className='card__circle_decoration'/>
                <div className='card__circle_min_decoration'/>
            </div>
            <div className="card__outer">
                <CardCvc cardCvc={cardCvc}/>
            </div>
        </>
    );
};

export default CardChecker;