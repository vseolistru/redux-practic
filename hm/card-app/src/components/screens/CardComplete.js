import React from 'react';
import iconComplete from '../../assets/icon-complete.svg'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import CompeteCard from "./CompeteCard";


const CardComplete = () => {

    const navigate = useNavigate()
    const cardData = useSelector(state => state)

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
                    <button onClick={()=> navigate('/')}>Continue</button>
                </div>
            </form>
            {cardData.map((item, idx) => (<CompeteCard key ={idx} userCard={item.cardUser }/>))}

        </>
    );
};

export default CardComplete;