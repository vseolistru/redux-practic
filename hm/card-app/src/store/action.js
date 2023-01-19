

export const GET_CARD = 'GET_CARD'

export const fetchCard = (cardHolder, cardNumber, cardMonth, cardYear, cardCvc) => ({
    type: GET_CARD,
    cardUser: {cardHolder, cardNumber, cardMonth, cardYear, cardCvc}
})