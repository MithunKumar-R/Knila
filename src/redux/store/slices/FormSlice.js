import { createSlice, nanoid } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: [
        {
            id: 'pdzvxLo8I191mfjvHKyvZi',
            firstName: 'Mithun',
            lastName: 'Kumar',
            email: 'mithunkumar1944@gmail.com',
            phoneNumber: 9751598588,
            address: 'Thudiyalur',
            city: 'Coimbatore',
            state: 'Tamil Nadu',
            country: 'India',
            postalCode: '641017'
        },
        {
            id: 'pdzvxLo8ImvbjegZHKyvZi',
            firstName: 'Test',
            lastName: 'Data',
            email: 'test@email.com',
            phoneNumber: 9123456789,
            address: 'Test Address',
            city: 'Test City',
            state: 'Test State',
            country: 'Test Country',
            postalCode: '641001'
        },
        {
            id: 'pdzvxLo8ImvbjegZHK1452',
            firstName: 'Test',
            lastName: 'Data 2',
            email: 'test1@email.com',
            phoneNumber: 9023456789,
            address: 'Test Address 2',
            city: 'Test City 2',
            state: 'Test State 2',
            country: 'Test Country 2',
            postalCode: '641002'
        },
        {
            id: 'bvnhxLo8ImvbjegZHK1452',
            firstName: 'Edit',
            lastName: 'Data',
            email: 'edit@email.com',
            phoneNumber: 9013456789,
            address: 'Address',
            city: 'City',
            state: 'State',
            country: 'Country 2',
            postalCode: '641003'
        }
    ],
    reducers: {
        submitForm(state, action) {
            state.unshift({
                id: nanoid(),
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                country: action.payload.country,
                postalCode: action.payload.postalCode
            })
            return state;
        },
        updateForm(state, action) {
            let contactIndex = state.findIndex((contact => contact.id === action.payload.id));
            state[contactIndex] = action.payload;
        }
    }
})

export const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('contactState', JSON.stringify(getState()));
        return result;
    };
};

export const reHydrateStore = () => {
    if (localStorage.getItem('contactState') !== null) {
        return JSON.parse(localStorage.getItem('contactState'));
    }
};

export const { submitForm, updateForm } = formSlice.actions;
export const formReducer = formSlice.reducer;