import React, { useState} from 'react';
import CardNumber from "../CardNumber";
import CardName from "../cardInputs/CardName";
import HolderNumber from "../cardInputs/HolderNumber";
import CardDateCvc from "../cardInputs/CardDateCvc";


const CardChecker = () => {
    const [cardHolder, setHolder] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardMonth, setMonth] = useState('')
    const [cardYear, setYear] = useState('')
    const [cardCvc, setCvc] = useState('')

    const arrayMonth = [...cardMonth]
    const arrayYear = [...cardYear]
    const arrayCvc = [...cardCvc]

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
                    <button>Confirm</button>
                </div>
            </form>
            <div className='card__shirt'>
                <CardNumber cardNumber={cardNumber}/>
                <div className='card__shirt_holder'>
                    {cardHolder ? cardHolder : 'Holder Name'}
                    <span>
                        {arrayMonth.length === 1 || arrayMonth.length ===2 ? arrayMonth[0]: 0}
                        {arrayMonth.length === 2 ? arrayMonth[1]: 9}
                        /
                        {arrayYear.length === 1 || arrayYear.length === 2 ? arrayYear[0] : 0}
                        {arrayYear.length === 2 ? arrayYear[1] : 0}
                    </span>
                </div>
                <div className='card__circle_decoration'/>
                <div className='card__circle_min_decoration'/>
            </div>
            <div className="card__outer">
                <p>
                    {arrayCvc.length === 1 || arrayCvc.length === 2 || arrayCvc.length === 3 ? arrayCvc[0] : 0}
                    {arrayCvc.length === 2 || arrayCvc.length === 3 ? arrayCvc[1] : 0}
                    {arrayCvc.length === 3 ? arrayCvc[2] : 0}
                </p>
            </div>
        </>
    );
};

export default CardChecker;