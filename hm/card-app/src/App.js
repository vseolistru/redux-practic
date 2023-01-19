import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import React from "react";
import CardChecker from "./components/screens/CardChecker";
import CardComplete from "./components/screens/CardComplete";
import {useDispatch} from "react-redux";
import {fetchCard} from "./store/action";


function App() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getCardData = (cardHolder, cardNumber, cardMonth, cardYear, cardCvc, e) => {
        e.preventDefault()
        if (cardHolder && cardNumber && cardMonth && cardYear && cardCvc) {
            dispatch(fetchCard(cardHolder, cardNumber, cardMonth, cardYear, cardCvc))
            navigate('/complete')
        }
    }

    return (
        <div className="App">
            <Routes>
                <Route path='/' exact element={<CardChecker getCardData={getCardData}/>}/>
                <Route path='/complete' exact element={<CardComplete/>}/>
            </Routes>
        </div>
    );
}

export default App;
