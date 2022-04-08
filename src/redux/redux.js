import { createStore } from 'redux';
const initialState = {
    formData: [
        // {
        //     id: '',
        //     bookname: '',
        //     author: '',
        //     price: '',
        //     quantity: '',
        //     date:''
        // }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'SAVE_BOOK_DATA':
            return {
                ...state,
                formData: [...state.formData, action.payload],

            };
        case 'EDIT_CARD_DATA':
            return {
                ...state,
                formData: state.formData.map(
                    
                    (content) => content.id === action.payload.id ? { ...action.payload }
                        : content)
                }
        case 'DELETE_CARD_DATA':
            const { id } = action.payload;
            return {
                ...state,
                formData: state.formData.filter(item => item.id !== id)
            }

        default:
            return state;
    }
}

export const saveFormDataAction = (formData) => ({
    type: 'SAVE_BOOK_DATA',
    payload: formData,
}
);
export const DeleteCardAction = (formData) => ({
    type: 'DELETE_CARD_DATA',
    payload: formData,
});
export const EditCardAction = (formData) => ({
    type: 'EDIT_CARD_DATA',
    payload: formData,
}
);


export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);