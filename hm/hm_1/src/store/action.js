
export const GET_USER = 'GET_USER'

export const fetchUser = (firstName, lastName,  email, password) => ({
    type: GET_USER,
    user:{firstName, lastName, email, password}
})
