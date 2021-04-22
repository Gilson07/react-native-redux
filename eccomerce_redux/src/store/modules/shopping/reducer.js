import produce from 'immer';

export default function shoppingReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return produce(state, draft => {
                const productIndex = draft.findIndex(product => product.id === action.product.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.product,
                        amount: 1,
                    });
                }
            });
        case 'REMOVE_PRODUCT':
            return produce(state, draft => {
                const productIndex = draft.findIndex(product => product.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        case 'UPDATE_PRODUCT': {
            if (action.amount <= 0) {
                return state;
            }

            return produce(state, draft => {
                const productIndex = draft.findIndex(product => product.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            })
        }
        default:
            return state;
    }
}