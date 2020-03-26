import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    logar: ['data'],
});

const INITIAL_STATE = [{
    email: '',
    token: ''
}]

const logar = (state = INITIAL_STATE, action) => (
    {   
        ...state,
        email: action.email,
        token: action.token,
    }
)

export default createReducer(INITIAL_STATE, {
    [Types.LOGAR]: logar
})


  