import { ICartActions, ICartState } from './CartContext';

export const cartReducer = (state: ICartState, action: ICartActions) => {
  let item = action.payload;
  let items = { ...state.items };

  switch (action.type) {
    case 'add_item':
      if (items[item.id]) {
        items[item.id].push(item);
      } else {
        items[item.id] = [item];
      }

      return { ...state, items };
    case 'remove_item':
      items[item.id].pop();

      if (items[item.id].length === 0) delete items[item.id];

      return { ...state, items };
    default:
      return state;
  }
};
